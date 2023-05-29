import axios from "@/lib/axios";
import { Note } from "@/types";
import { TNoteForm } from "../noteFormSchema";

const editNote = async (note: Note, data: TNoteForm) => {
    if (note) {
        const editedNote: Note = {
            ...data,
            id: note.id,
            created: note.created,
            edited: new Date(),
        };
        await axios.put(`/notes/${note.id}`, editedNote);
    }
};

export default editNote;
