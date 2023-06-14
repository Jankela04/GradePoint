import { Suspense } from "react";
import { Container, Title, InlineSpinner } from "@/components/Elements";
import { NoteFilterProvider } from "@/context/NoteFilterContext";
import NoteControls from "./NoteControls";
import { NoteList } from "@/components/NoteList";

function NotesPage() {
    return (
        <Container>
            <Title>Notes</Title>
            <NoteFilterProvider>
                <NoteControls />
                <Suspense fallback={<InlineSpinner />}>
                    <NoteList />
                </Suspense>
            </NoteFilterProvider>
        </Container>
    );
}

export default NotesPage;
