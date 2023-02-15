import NoteCreateActions from "./components/NoteCreateActions/NoteCreateActions";
import NoteInfo from "./components/NoteInfo/NoteInfo";
import NoteText from "./components/NoteText/NoteText";
import { FormEvent, useState } from "react";
import axios from "axios";
import { TNote } from "../../../../components/NoteList/NoteList";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import NewNoteFormContext, {
    TForm,
    initialFormState,
    useNewNoteForm,
} from "../../../../../../context/NewNoteFormContext";

const NoteForm = () => {
    const { form, setForm } = useNewNoteForm();

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.tag && form.text && form.title) {
            const newNote: TNote = { ...form, id: uuidv4() };
            await axios.post("http://localhost:3000/notes", newNote);
            setForm(initialFormState);
            navigate("/notes");
        } else {
            alert("Please fill all inputs.");
        }
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <NoteInfo />
            <NoteText />
            <NoteCreateActions />
        </form>
    );
};

export default NoteForm;
