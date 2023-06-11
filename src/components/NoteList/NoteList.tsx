import styles from "./styles.module.scss";
import NoteCard from "./NoteCard/NoteCard";
import { useNoteFilter } from "@/context/NoteFilterContext";
import useNotesQuery from "./api/getNotes";

type NoteListProps = {
    tag?: string;
};
/**
 * A component that fetches and displays notes based on a provided tag or all notes if no tag is specified.
 *
 * @param {string} tag - An optional string specifying the tag to filter the notes by.
 */
function NoteList({ tag }: NoteListProps) {
    const { filter } = useNoteFilter();
    const { data: notes } = useNotesQuery(tag);

    if (!notes) return null;

    const filteredNotes = notes?.filter(
        (note) =>
            note.title.toLowerCase().includes(filter.query.toLowerCase()) ||
            note.tag.toLowerCase().includes(filter.query.toLowerCase()) ||
            note.text.toLowerCase().includes(filter.query.toLowerCase())
    );

    if (!notes?.length) {
        return (
            <div className={styles.alert_container}>
                <p>You don&apos;t have any Notes.</p>
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
