import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

// ✅ GET all episodes
export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchEpisodes",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/episodes`);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to fetch episodes"
      );
    }
  }
);

// ✅ GET single episode by ID
export const fetchEpisodeById = createAsyncThunk(
  "episodes/fetchEpisodeById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}episodes/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Episode not found");
    }
  }
);

// ✅ CREATE new episode
export const createEpisode = createAsyncThunk(
  "episodes/createEpisode",
  async (episodeData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API}/episodes`, episodeData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to create episode"
      );
    }
  }
);

// ✅ UPDATE existing episode
export const updateEpisode = createAsyncThunk(
  "episodes/updateEpisode",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`${API}/episodes/${id}`, updates);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to update episode"
      );
    }
  }
);

// ✅ DELETE episode
export const deleteEpisode = createAsyncThunk(
  "episodes/deleteEpisode",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}/episodes/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to delete episode"
      );
    }
  }
);

const episodeSlice = createSlice({
  name: "episodes",
  initialState: {
    list: [],
    currentEpisode: null,
    loadingList: false,
    loadingCurrent: false,
    creating: false,
    updating: false,
    deleting: false,
    error: null,
  },
  reducers: {
    clearCurrentEpisode: (state) => {
      state.currentEpisode = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LIST EPISODES
      .addCase(fetchEpisodes.pending, (state) => {
        state.loadingList = true;
        state.error = null;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loadingList = false;
        state.error = action.payload;
      })

      // GET SINGLE EPISODE
      .addCase(fetchEpisodeById.pending, (state) => {
        state.loadingCurrent = true;
        state.error = null;
      })
      .addCase(fetchEpisodeById.fulfilled, (state, action) => {
        state.loadingCurrent = false;
        state.currentEpisode = action.payload;
      })
      .addCase(fetchEpisodeById.rejected, (state, action) => {
        state.loadingCurrent = false;
        state.error = action.payload;
      })

      // CREATE
      .addCase(createEpisode.pending, (state) => {
        state.creating = true;
        state.error = null;
      })
      .addCase(createEpisode.fulfilled, (state, action) => {
        state.creating = false;
        state.list.unshift(action.payload);
      })
      .addCase(createEpisode.rejected, (state, action) => {
        state.creating = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateEpisode.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(updateEpisode.fulfilled, (state, action) => {
        state.updating = false;
        const index = state.list.findIndex(
          (ep) => ep._id === action.payload._id
        );
        if (index !== -1) state.list[index] = action.payload;
        if (state.currentEpisode?._id === action.payload._id) {
          state.currentEpisode = action.payload;
        }
      })
      .addCase(updateEpisode.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteEpisode.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(deleteEpisode.fulfilled, (state, action) => {
        state.deleting = false;
        state.list = state.list.filter((ep) => ep._id !== action.payload);

        if (state.currentEpisode?._id === action.payload) {
          state.currentEpisode = null;
        }
      })
      .addCase(deleteEpisode.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentEpisode, clearError } = episodeSlice.actions;
export default episodeSlice.reducer;
