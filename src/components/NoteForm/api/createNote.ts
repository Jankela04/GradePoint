import { v4 as uuidv4 } from "uuid";
import { Note } from "@/types";
import axios from "@/lib/axios";
import { TNoteForm } from "../noteFormSchema";

const createNewNote = async (data: TNoteForm) => {
    const newNote: Note = {
        ...data,
        id: uuidv4(),
        created: new Date(),
        edited: new Date(),
    };
    await axios.post("/notes", newNote);
};

export default createNewNote;
