import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./peopleSlice";

export const store = configureStore({
  reducer: {
    people: peopleReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
