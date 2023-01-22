import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import NoteCard from "./components/NoteCard/NoteCard";
import { useAppSelector } from "../../../../hooks/reduxHooks";

export type TNote = {
    id: number;
    title: string;
    tag: string;
    note: string;
};

const NoteList = () => {
    const getNotes = async () => {
        const res = await axios.get("http://localhost:3000/notes");
        setNotes(res.data);
    };
    const query = useAppSelector((state) => state.noteFilter);

    const [notes, setNotes] = useState<TNote[]>();

    useEffect(() => {
        getNotes();
    }, []);

    const filteredNotes = notes?.filter(
        (note) =>
            note.title.toLowerCase().includes(query.toLowerCase()) ||
            note.tag.toLowerCase().includes(query.toLowerCase()) ||
            note.note.toLowerCase().includes(query.toLowerCase())
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
