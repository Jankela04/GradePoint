import NoteActions from "./components/NoteActions/NoteActions";
import NoteInfo from "./components/NoteInfo/NoteInfo";
import styles from "./styles.module.scss";

const NewNote = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Create a Note</h1>
                <NoteInfo />
                <textarea
                    className={styles.textarea}
                    placeholder="Your note..."
                ></textarea>
                <NoteActions />
            </div>
        </div>
    );
};

export default NewNote;
