import NoteActions from "./components/NoteActions/NoteActions";
import NoteInfo from "./components/NoteInfo/NoteInfo";
import NoteText from "./components/NoteText/NoteText";
import styles from "./styles.module.scss";

const NewNote = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Create a Note</h1>
                <form>
                    <NoteInfo />
                    <NoteText />
                    <NoteActions />
                </form>
            </div>
        </div>
    );
};

export default NewNote;
