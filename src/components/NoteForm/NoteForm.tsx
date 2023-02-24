import NoteFormActions from "./components/NoteFormActions/NoteFormActions";
import NoteInfo from "./components/NoteInfo/NoteInfo";
import NoteText from "./components/NoteText/NoteText";
import { FormEvent } from "react";
import { TNote } from "../../pages/Notes/components/NoteList/NoteList";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { initialFormState, useNoteForm } from "../../context/NoteFormContext";
import { Mode } from "../../layout/NoteFormLayout/NoteFormLayout";
import axiosService from "../../services/axios";
import { formatDate } from "../../utils/FormatDate";

const NoteForm = ({ mode, note }: { mode: Mode; note: TNote | null }) => {
    const { form, setForm } = useNoteForm();

    const navigate = useNavigate();

    const createNewNote = async () => {
        const newNote: TNote = {
            ...form,
            id: uuidv4(),
            created: new Date(),
            edited: new Date(),
        };
        await axiosService.post("/notes", newNote);
        setForm(initialFormState);
        navigate("/notes");
    };
    const editNote = async (note: TNote | null) => {
        if (note) {
            const editedNote: TNote = {
                ...form,
                id: note.id,
                created: note.created,
                edited: new Date(),
            };
            await axiosService.put(`/notes/${note.id}`, editedNote);
            setForm(initialFormState);
            navigate("/notes");
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.tag && form.text && form.title) {
            if (mode === "new") {
                createNewNote();
            } else {
                editNote(note);
            }
        } else {
            alert("Please fill all inputs.");
        }
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <NoteInfo />
            <NoteText />
            <NoteFormActions mode={mode} />
        </form>
    );
};

export default NoteForm;
