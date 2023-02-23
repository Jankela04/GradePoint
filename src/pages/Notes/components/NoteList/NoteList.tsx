import styles from "./styles.module.scss";
import NoteCard from "./components/NoteCard/NoteCard";
import { useNoteFilter } from "../../../../context/NoteFilterContext";
import useFetch from "../../../../hooks/useFetch";

export type TNote = {
    id: string;
    title: string;
    tag: string;
    text: string;
    created: string;
    edited: string | null;
};

const NoteList = () => {
    const { filter } = useNoteFilter();

    const { data: notes, loading, error } = useFetch<TNote[]>("/notes");

    const filteredNotes = notes?.filter(
        (note) =>
            note.title.toLowerCase().includes(filter.query.toLowerCase()) ||
            note.tag.toLowerCase().includes(filter.query.toLowerCase()) ||
            note.text.toLowerCase().includes(filter.query.toLowerCase())
    );

    if (loading)
        return (
            <div className={styles.alert_container}>
                <p>Loading...</p>
            </div>
        );

    if (error) return <div>Error, Something Went Wrong</div>;

    if (!notes?.length)
        return (
            <div className={styles.alert_container}>
                <p>
                    You don't have any Notes, click "New Note" to create note.
                </p>
            </div>
        );

    return (
        <div className={styles.container}>
            {filteredNotes?.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </div>
    );
};

export default NoteList;
