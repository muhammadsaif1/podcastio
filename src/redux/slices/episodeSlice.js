import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get("/episodes");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createEpisode = createAsyncThunk(
  "episodes/create",
  async (episodeData, thunkAPI) => {
    try {
      const res = await axiosInstance.post("/episodes", episodeData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateEpisode = createAsyncThunk(
  "episodes/update",
  async ({ id, updates }, thunkAPI) => {
    try {
      const res = await axiosInstance.put(`/episodes/${id}`, updates);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteEpisode = createAsyncThunk(
  "episodes/delete",
  async (id, thunkAPI) => {
    try {
      await axiosInstance.delete(`/episodes/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const episodeSlice = createSlice({
  name: "episodes",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch Episodes
      .addCase(fetchEpisodes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Episode
      .addCase(createEpisode.pending, (state) => {
        state.error = null;
      })
      .addCase(createEpisode.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(createEpisode.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Update Episode
      .addCase(updateEpisode.fulfilled, (state, action) => {
        const idx = state.list.findIndex((ep) => ep._id === action.payload._id);
        if (idx !== -1) {
          state.list[idx] = action.payload;
        }
      })
      .addCase(updateEpisode.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Delete Episode
      .addCase(deleteEpisode.fulfilled, (state, action) => {
        state.list = state.list.filter((ep) => ep._id !== action.payload);
      })
      .addCase(deleteEpisode.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default episodeSlice.reducer;
