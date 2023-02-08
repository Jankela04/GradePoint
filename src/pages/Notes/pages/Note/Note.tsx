import styles from "./styles.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { TNote } from "../../components/NoteList/NoteList";
import NoteActions from "./components/NoteActions/NoteActions";

const Note = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [noteInfo, setNoteInfo] = useState<TNote>();

    const getNote = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/notes/${id}`);
            setNoteInfo(res.data);
        } catch (err: any) {
            console.error(err);
            if (err.request.status === 404) {
                navigate("/notes/error");
            }
        }
    };
    useEffect(() => {
        getNote();
    }, []);

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>{noteInfo?.title}</h1>
            <div className={styles.tag}>{noteInfo?.tag}</div>
            <div className={styles.container}>
                <div className={styles.text}>{noteInfo?.text}</div>
                <NoteActions />
            </div>
        </div>
    );
};

export default Note;
