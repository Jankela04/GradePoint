import NoteFilter from "./components/NoteFilter/NoteFilter";
import styles from "./styles.module.scss";

const NoteControls = () => {
    return (
        <div className={styles.note_controls}>
            <NoteFilter />
        </div>
    );
};

export default NoteControls;
