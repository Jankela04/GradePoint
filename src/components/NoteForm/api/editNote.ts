import axiosService from "@/services/axios";
import { Note } from "@/types";
import { NoteForm } from "../noteFormSchema";

const editNote = async (note: Note, data: NoteForm) => {
    if (note) {
        const editedNote: Note = {
            ...data,
            id: note.id,
            created: note.created,
            edited: new Date(),
        };
        await axiosService.put(`/notes/${note.id}`, editedNote);
        // setForm(initialFormState);
        // navigate("/notes");
    }
};

export default editNote;
