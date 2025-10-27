import { createSlice } from "@reduxjs/toolkit";

const EXPIRY_HOURS = 3; // 3 hours

// helper
const isExpired = () => {
  const savedTime = localStorage.getItem("authTimestamp");
  if (!savedTime) return true;

  const now = Date.now();
  const diff = now - parseInt(savedTime, 10);
  const threeHoursInMs = EXPIRY_HOURS * 60 * 60 * 1000;

  return diff > threeHoursInMs;
};

const initialState = {
  isAuthenticated:
    localStorage.getItem("isAuthenticated") === "true" && !isExpired(),
};

if (initialState.isAuthenticated === false) {
  // cleanup if expired
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("authTimestamp");
}

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
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("authTimestamp");
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
    // Call this once at app start (optional explicit check)
    checkExpiry(state) {
      if (isExpired()) {
        state.isAuthenticated = false;
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("authTimestamp");
      }
    },
  },
});

export const { login, logout, setAuth, checkExpiry } = authSlice.actions;
export default authSlice.reducer;
