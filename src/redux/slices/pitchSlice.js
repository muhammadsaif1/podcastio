// redux/slices/pitchSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

// ✅ GET all pitches
export const fetchPitches = createAsyncThunk(
  "pitches/fetchPitches",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/pitch`);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to fetch pitches"
      );
    }
  }
);

// ✅ GET single pitch by ID
export const fetchPitchById = createAsyncThunk(
  "pitches/fetchPitchById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/pitch/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Pitch not found");
    }
  }
);

// ✅ CREATE new pitch
export const createPitch = createAsyncThunk(
  "pitches/createPitch",
  async (pitchData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API}/pitch`, pitchData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to create pitch"
      );
    }
  }
);

// ✅ UPDATE pitch
export const updatePitch = createAsyncThunk(
  "pitches/updatePitch",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`${API}/pitch/${id}`, updates);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to update pitch"
      );
    }
  }
);

// ✅ DELETE pitch
export const deletePitch = createAsyncThunk(
  "pitches/deletePitch",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}/pitch/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to delete pitch"
      );
    }
  }
);

const pitchSlice = createSlice({
  name: "pitches",
  initialState: {
    list: [],
    currentPitch: null,
    loadingList: false,
    loadingCurrent: false,
    creating: false,
    updating: false,
    deleting: false,
    error: null,
  },
  reducers: {
    clearCurrentPitch: (state) => {
      state.currentPitch = null;
    },
    clearPitchError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ LIST PITCHES
      .addCase(fetchPitches.pending, (state) => {
        state.loadingList = true;
        state.error = null;
      })
      .addCase(fetchPitches.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload;
      })
      .addCase(fetchPitches.rejected, (state, action) => {
        state.loadingList = false;
        state.error = action.payload;
      })

      // ✅ GET SINGLE PITCH
      .addCase(fetchPitchById.pending, (state) => {
        state.loadingCurrent = true;
        state.error = null;
      })
      .addCase(fetchPitchById.fulfilled, (state, action) => {
        state.loadingCurrent = false;
        state.currentPitch = action.payload;
      })
      .addCase(fetchPitchById.rejected, (state, action) => {
        state.loadingCurrent = false;
        state.error = action.payload;
      })

      // ✅ CREATE
      .addCase(createPitch.pending, (state) => {
        state.creating = true;
        state.error = null;
      })
      .addCase(createPitch.fulfilled, (state, action) => {
        state.creating = false;
        state.list.unshift(action.payload);
      })
      .addCase(createPitch.rejected, (state, action) => {
        state.creating = false;
        state.error = action.payload;
      })

      // ✅ UPDATE
      .addCase(updatePitch.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(updatePitch.fulfilled, (state, action) => {
        state.updating = false;
        const index = state.list.findIndex((p) => p._id === action.payload._id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
        if (state.currentPitch?._id === action.payload._id) {
          state.currentPitch = action.payload;
        }
      })
      .addCase(updatePitch.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload;
      })

      // ✅ DELETE
      .addCase(deletePitch.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(deletePitch.fulfilled, (state, action) => {
        state.deleting = false;
        state.list = state.list.filter((pitch) => pitch._id !== action.payload);
      })
      .addCase(deletePitch.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentPitch, clearPitchError } = pitchSlice.actions;
export default pitchSlice.reducer;
