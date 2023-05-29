import { NoteFormLayout } from "@/layout/NoteFormLayout";
import { MainLayout } from "@/layout/MainLayout";

function NewNote() {
    return (
        <MainLayout>
            <NoteFormLayout mode="new" />
        </MainLayout>
    );
}

export default NewNote;
