import { Container, Title } from "@/components/Elements";
import { NoteFilterProvider } from "@/context/NoteFilterContext";
import NoteControls from "./NoteControls";
import { NoteList } from "@/components/NoteList";
import useNotesQuery from "./api/getNotes";

function Notes() {
    const { data: notes } = useNotesQuery();

    if (!notes) return null;

    return (
        <Container>
            <Title>Notes</Title>
            <NoteFilterProvider>
                <NoteControls />
                <NoteList notes={notes} />
            </NoteFilterProvider>
        </Container>
    );
}

export default Notes;
