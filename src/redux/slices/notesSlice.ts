import { createSlice } from "@reduxjs/toolkit";

export type Note = {
    class: string;
    title: string;
    note: string;
};

export type NoteList = Note[];

const initialState: NoteList = [];

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
});

export default notesSlice.reducer;
