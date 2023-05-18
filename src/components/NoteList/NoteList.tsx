import styles from "./styles.module.scss";
import NoteCard from "./NoteCard/NoteCard";
import { useNoteFilter } from "@/context/NoteFilterContext";

export type TNote = {
    id: string;
    title: string;
    tag: string;
    text: string;
    created: Date;
    edited: Date;
};

function NoteList({ notes }: { notes: TNote[] }) {
    const { filter } = useNoteFilter();

    const filteredNotes = notes?.filter(
        (note) => note.title.toLowerCase().includes(filter.query.toLowerCase())
            || note.tag.toLowerCase().includes(filter.query.toLowerCase())
            || note.text.toLowerCase().includes(filter.query.toLowerCase())
    );

    if (!notes?.length) {
        return (
            <div className={styles.alert_container}>
                <p>You don't have any Notes.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {filteredNotes?.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </div>
    );
}

export default NoteList;
