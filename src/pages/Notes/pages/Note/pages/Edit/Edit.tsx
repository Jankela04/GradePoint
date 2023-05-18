import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import NoteFormLayout from "@/layout/NoteFormLayout/NoteFormLayout";
import { Note } from "@/types";

function Edit() {
    const { id } = useParams();
    const { data: note, loading, error } = useFetch<Note>(`/notes/${id}`);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error, Something Went Wrong</div>;
    }

    if (!note) {
        return <div>Note not found</div>;
    }

    return <NoteFormLayout mode="edit" note={note} />;
}

export default Edit;
