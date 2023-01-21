import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const noteFilterSlice = createSlice({
    name: "noteFilter",
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { updateFilter } = noteFilterSlice.actions;

export default noteFilterSlice.reducer;
