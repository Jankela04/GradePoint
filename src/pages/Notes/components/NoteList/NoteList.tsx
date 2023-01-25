import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import NoteCard from "./components/NoteCard/NoteCard";
import { useAppSelector } from "../../../../hooks/reduxHooks";

export type TNote = {
    id: string;
    title: string;
    tag: string;
    text: string;
};

const NoteList = () => {
    const getNotes = async () => {
        const res = await axios.get("http://localhost:3000/notes");
        setNotes(res.data);
    };
    const filter = useAppSelector((state) => state.note.filter);

    const [notes, setNotes] = useState<TNote[]>();

    useEffect(() => {
        getNotes();
    }, []);

    const filteredNotes = notes?.filter(
        (note) =>
            note.title.toLowerCase().includes(filter.query.toLowerCase()) ||
            note.tag.toLowerCase().includes(filter.query.toLowerCase()) ||
            note.text.toLowerCase().includes(filter.query.toLowerCase())
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
