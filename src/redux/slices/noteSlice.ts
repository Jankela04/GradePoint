import { createSlice } from "@reduxjs/toolkit";

type Note = {
    filter: {
        query: string;
        tag: string;
    };
    new: {
        title: string;
        tag: string;
        text: string;
    };
};

const initialState: Note = {
    filter: {
        query: "",
        tag: "",
    },
    new: {
        title: "",
        tag: "",
        text: "",
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
        setNewNoteTitle: (state, action) => {
            state.new.title = action.payload;
        },
        setNewNoteTag: (state, action) => {
            state.new.tag = action.payload;
        },
        setNewNoteText: (state, action) => {
            state.new.text = action.payload;
        },
        clearNewNoteInfo: (state) => {
            state.new = {
                title: "",
                tag: "",
                text: "",
            };
        },
    },
});

export const {
    setFilterQuery,
    setFilterTag,
    setNewNoteTitle,
    setNewNoteTag,
    setNewNoteText,
    clearNewNoteInfo,
} = noteSlice.actions;

export default noteSlice.reducer;
