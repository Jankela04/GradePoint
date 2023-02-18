import { NewNoteFormProvider } from "../../../../context/NewNoteFormContext";
import NoteForm from "./components/NoteForm/NoteForm";
import styles from "./styles.module.scss";

const NewNote = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Create a Note</h1>
                <NewNoteFormProvider>
                    <NoteForm />
                </NewNoteFormProvider>
            </div>
        </>
    );
};

export default NewNote;
