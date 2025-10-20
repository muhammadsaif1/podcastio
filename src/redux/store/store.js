import { configureStore } from "@reduxjs/toolkit";
import episodeReducer from "../slices/episodeSlice";
import messageReducer from "../slices/messageSlice";

const store = configureStore({
  reducer: {
    episodes: episodeReducer,
    messages: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
