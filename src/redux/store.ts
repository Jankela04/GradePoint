import { configureStore } from "@reduxjs/toolkit";
import noteFilterReducer from "./slices/noteFilterSlice";

const store = configureStore({
    reducer: {
        noteFilter: noteFilterReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
