import { v4 as uuidv4 } from "uuid";
import { Note } from "@/types";
import axiosService from "@/services/axios";
import { NoteForm } from "../noteFormSchema";

const createNewNote = async (data: NoteForm) => {
    const newNote: Note = {
        ...data,
        id: uuidv4(),
        created: new Date(),
        edited: new Date(),
    };
    await axiosService.post("/notes", newNote);
};

export default createNewNote;
