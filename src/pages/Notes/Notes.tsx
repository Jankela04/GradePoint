import Title from "../../components/Title/Title";
import { NoteFilterProvider } from "../../context/NoteFilterContext";
import NoteControls from "./components/NoteControls/NoteControls";
import NoteList from "./components/NoteList/NoteList";
import styles from "./styles.module.scss";

const Notes = () => {
    return (
        <div className={styles.container}>
            <Title>Notes</Title>
            <NoteFilterProvider>
                <NoteControls />
                <NoteList />
            </NoteFilterProvider>
        </div>
    );
};

export default Notes;
