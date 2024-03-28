import { configureStore } from "@reduxjs/toolkit";
import { commentApi } from "./services/api";

export const store = configureStore({
  reducer: {
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentApi.middleware),
});
