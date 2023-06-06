import { useParams } from "react-router-dom";
import { NoteFormLayout } from "@/layout/NoteFormLayout";
import { MainLayout } from "@/layout/MainLayout";
import useNoteQuery from "../../api/getNote";
import type { NotePageParams } from "../../Note";

function Edit() {
    const { id } = useParams() as NotePageParams;

    const { data: note } = useNoteQuery(id);

    if (!note) return null;

    return (
        <MainLayout>
            <NoteFormLayout mode="edit" note={note} />
        </MainLayout>
    );
}

export default Edit;
