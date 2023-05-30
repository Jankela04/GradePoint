import { useParams } from "react-router-dom";
import { NoteFormLayout } from "@/layout/NoteFormLayout";
import { MainLayout } from "@/layout/MainLayout";
import useNoteQuery from "../../api/getNote";
import type { NoteParams } from "../../Note";

function Edit() {
    const { id } = useParams() as NoteParams;

    const { data: note, isLoading, error } = useNoteQuery(id);

    if (isLoading) {
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
