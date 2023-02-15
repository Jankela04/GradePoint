import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import NoteCard from "./components/NoteCard/NoteCard";
import { useNoteFilter } from "../../../../context/NoteFilterContext";

export type TNote = {
    id: string;
    title: string;
    tag: string;
    text: string;
};

const NoteList = () => {
    const [notes, setNotes] = useState<TNote[]>();
    const [loading, setLoading] = useState(true);
    const { filter } = useNoteFilter();

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        setLoading(true);
        const res = await axios.get("http://localhost:3000/notes");
        setNotes(res.data);
        setLoading(false);
    };

    const filteredNotes = notes?.filter(
        (note) =>
            note.title.toLowerCase().includes(filter.query.toLowerCase()) ||
            note.tag.toLowerCase().includes(filter.query.toLowerCase()) ||
            note.text.toLowerCase().includes(filter.query.toLowerCase())
    );

    return (
        <>
            {loading ? (
                <div className={styles.alert_container}>
                    <p>Loading...</p>
                </div>
            ) : !notes?.length ? (
                <div className={styles.alert_container}>
                    <p>
                        You don't have any Notes, click "New Note" to create
                        note.
                    </p>
                </div>
            ) : (
                <div className={styles.container}>
                    {filteredNotes?.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
            )}
        </>
    );
};

export default NoteList;
