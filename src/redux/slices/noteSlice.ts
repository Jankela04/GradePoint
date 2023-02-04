import { createSlice } from "@reduxjs/toolkit";

type Note = {
    filter: {
        query: string;
        tag: string;
    };
};

const initialState: Note = {
    filter: {
        query: "",
        tag: "",
    },
};

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        setFilterQuery: (state, action) => {
            state.filter.query = action.payload;
        },
        setFilterTag: (state, action) => {
            state.filter.tag = action.payload;
        },
    },
});

export const { setFilterQuery, setFilterTag } = noteSlice.actions;

export default noteSlice.reducer;
