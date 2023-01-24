import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slices/noteSlice";

const store = configureStore({
    reducer: {
        note: noteSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
