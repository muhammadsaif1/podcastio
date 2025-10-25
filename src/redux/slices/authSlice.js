import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
    setAuth(state, action) {
      state.isAuthenticated = !!action.payload;
      if (action.payload) {
        localStorage.setItem("isAuthenticated", "true");
      } else {
        localStorage.removeItem("isAuthenticated");
      }
    },
  },
});

export const { login, logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
