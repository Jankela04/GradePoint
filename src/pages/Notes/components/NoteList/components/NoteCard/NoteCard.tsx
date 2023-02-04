import { useNavigate } from "react-router-dom";
import { TNote } from "../../NoteList";
import styles from "./styles.module.scss";

const NoteCard = ({ note }: { note: TNote }) => {
    const navigate = useNavigate();
    return (
        <div
            className={styles.card}
            onClick={() => navigate(`/notes/${note.id}`)}
        >
            <h3 className={styles.title}>{note.title}</h3>
            <div className={styles.tag}>{note.tag}</div>
        </div>
    );
};

export default NoteCard;
