import { configureStore } from "@reduxjs/toolkit";
import episodeReducer from "../slices/episodeSlice";
import messageReducer from "../slices/messageSlice";
import authReducer from "../slices/authSlice";
import pitchReducer from "../slices/pitchSlice";
import productReducer from "../slices/productSlice";

const store = configureStore({
  reducer: {
    episodes: episodeReducer,
    messages: messageReducer,
    auth: authReducer,
    pitches: pitchReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
