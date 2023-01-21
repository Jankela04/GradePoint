import { TNote } from "../NoteList/NoteList";
import styles from "./styles.module.scss";

const NoteCard = ({ note }: { note: TNote }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{note.title}</h3>
            <div className={styles.tag}>{note.tag}</div>
        </div>
    );
};

export default NoteCard;
