import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL; // fallback
const EXPIRY_HOURS = 3; // 3 hours

// -----------------------------
// Helper: Check expiry
// -----------------------------
const isExpired = () => {
  const savedTime = localStorage.getItem("authTimestamp");
  if (!savedTime) return true;
  const now = Date.now();
  const diff = now - parseInt(savedTime, 10);
  return diff > EXPIRY_HOURS * 60 * 60 * 1000;
};

// -----------------------------
// Helper: Auth headers
// -----------------------------
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

// -----------------------------
// Initial State
// -----------------------------
const initialState = {
  isAuthenticated:
    localStorage.getItem("isAuthenticated") === "true" && !isExpired(),
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

// Cleanup expired sessions
if (!initialState.isAuthenticated) {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("authTimestamp");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

// ======================================================
// ASYNC THUNKS
// ======================================================

// ✅ Register user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/register`, {
        email,
        password,
      });
      return data;
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      return rejectWithValue(message);
    }
  }
);

// ✅ Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/login`, {
        email,
        password,
      });
      return data;
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      return rejectWithValue(message);
    }
  }
);

// ✅ Update user (protected)
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ id, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${API_URL}/users/${id}`,
        { email, password },
        { headers: getAuthHeaders() }
      );
      return data;
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      return rejectWithValue(message);
    }
  }
);

// ======================================================
// SLICE
// ======================================================
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("authTimestamp", Date.now().toString());
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("authTimestamp");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    setAuth(state, action) {
      state.isAuthenticated = !!action.payload;
      if (action.payload) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("authTimestamp", Date.now().toString());
      } else {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("authTimestamp");
      }
    },
    checkExpiry(state) {
      if (isExpired()) {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("authTimestamp");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
  },
  extraReducers: (builder) => {
    // --- REGISTER ---
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = { _id: action.payload._id, email: action.payload.email };
      state.token = action.payload.token;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("authTimestamp", Date.now().toString());
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // --- LOGIN ---
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = { _id: action.payload._id, email: action.payload.email };
      state.token = action.payload.token;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("authTimestamp", Date.now().toString());
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // --- UPDATE USER ---
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(state.user));
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { login, logout, setAuth, checkExpiry } = authSlice.actions;
export default authSlice.reducer;
