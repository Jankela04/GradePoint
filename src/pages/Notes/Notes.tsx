import { Title } from "@/components/Elements";
import { NoteFilterProvider } from "@/context/NoteFilterContext";
import NoteControls from "./NoteControls";
import { NoteList } from "@/components/NoteList";
import styles from "./styles/Notes.module.scss";
import useNotesQuery from "./api/getNotes";

function Notes() {
    const { data: notes } = useNotesQuery();

    if (!notes) return null;

    return (
        <div className={styles.container}>
            <Title>Notes</Title>
            <NoteFilterProvider>
                <NoteControls />
                <NoteList notes={notes} />
            </NoteFilterProvider>
        </div>
    );
}

export default Notes;
