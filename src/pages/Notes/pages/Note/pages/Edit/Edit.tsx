import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { NoteFormLayout } from "@/layout/NoteFormLayout";
import { Note } from "@/types";
import { MainLayout } from "@/layout/MainLayout";

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

    return (
        <MainLayout>
            <NoteFormLayout mode="edit" note={note} />
        </MainLayout>
    );
}

export default Edit;
