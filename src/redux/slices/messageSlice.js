// src/store/slices/messageSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL; // e.g. http://localhost:5000

// ---------------------- ASYNC THUNKS ----------------------

// CREATE message
export const createMessage = createAsyncThunk(
  "messages/createMessage",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/messages/create`, payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to create message"
      );
    }
  }
);

// GET ALL messages
export const getAllMessages = createAsyncThunk(
  "messages/getAllMessages",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/messages`);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch messages"
      );
    }
  }
);

// GET message by ID
export const getMessageById = createAsyncThunk(
  "messages/getMessageById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/messages/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Message not found"
      );
    }
  }
);

// DELETE message
export const deleteMessage = createAsyncThunk(
  "messages/deleteMessage",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/messages/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to delete message"
      );
    }
  }
);

// ---------------------- SLICE ----------------------

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    message: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearMessageState: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // CREATE
    builder
      .addCase(createMessage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages.push(action.payload);
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // GET ALL
    builder
      .addCase(getAllMessages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(getAllMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // GET BY ID
    builder
      .addCase(getMessageById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMessageById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getMessageById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // DELETE
    builder
      .addCase(deleteMessage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = state.messages.filter(
          (msg) => msg._id !== action.payload
        );
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessageState } = messageSlice.actions;
export default messageSlice.reducer;
