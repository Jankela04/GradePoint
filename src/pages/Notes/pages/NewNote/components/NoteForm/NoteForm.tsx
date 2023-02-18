import NoteCreateActions from "./components/NoteCreateActions/NoteCreateActions";
import NoteInfo from "./components/NoteInfo/NoteInfo";
import NoteText from "./components/NoteText/NoteText";
import { FormEvent } from "react";
import { TNote } from "../../../../components/NoteList/NoteList";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import {
    initialFormState,
    useNewNoteForm,
} from "../../../../../../context/NewNoteFormContext";
import formatDate from "../../../../../../utils/FormatDate";
import axiosService from "../../../../../../services/axios";

const NoteForm = () => {
    const { form, setForm } = useNewNoteForm();

    const navigate = useNavigate();

    const createNewNote = (): TNote => {
        return {
            ...form,
            id: uuidv4(),
            created: formatDate(new Date()),
            edited: null,
        };
    };
    const saveNewNoteToServer = async (newNote: TNote) => {
        await axiosService.post("/notes", newNote);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.tag && form.text && form.title) {
            const newNote = createNewNote();
            saveNewNoteToServer(newNote);
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
