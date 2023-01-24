import NoteForm from "./components/NoteForm/NoteForm";
import styles from "./styles.module.scss";

const NewNote = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Create a Note</h1>
                <NoteForm />
            </div>
        </div>
    );
};

export default NewNote;
