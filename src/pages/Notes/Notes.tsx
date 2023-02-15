import Navbar from "../../components/Navbar/Navbar";
import { NoteFilterProvider } from "../../context/NoteFilterContext";
import NoteControls from "./components/NoteControls/NoteControls";
import NoteList from "./components/NoteList/NoteList";
import styles from "./styles.module.scss";

const Notes = () => {
    return (
        <div className={styles.page}>
            <Navbar />
            <h1 className={styles.title}>Notes</h1>
            <NoteFilterProvider>
                <NoteControls />
                <NoteList />
            </NoteFilterProvider>
        </div>
    );
};

export default Notes;
