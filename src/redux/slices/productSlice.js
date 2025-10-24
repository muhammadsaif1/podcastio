import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;
// this should be like: http://localhost:5000/api

// ✅ GET all Printify products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/products`);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to fetch products"
      );
    }
  }
);

// ✅ GET Printify single product by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/products/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Product not found");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    currentProduct: null,
    loadingList: false,
    loadingCurrent: false,
    error: null,
  },
  reducers: {
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // ✅ LIST PRODUCTS
      .addCase(fetchProducts.pending, (state) => {
        state.loadingList = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload.data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loadingList = false;
        state.error = action.payload.data;
      })

      // ✅ GET SINGLE PRODUCT
      .addCase(fetchProductById.pending, (state) => {
        state.loadingCurrent = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loadingCurrent = false;
        state.currentProduct = action.payload.data;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loadingCurrent = false;
        state.error = action.payload.data;
      });
  },
});

export const { clearCurrentProduct, clearError } = productSlice.actions;
export default productSlice.reducer;
