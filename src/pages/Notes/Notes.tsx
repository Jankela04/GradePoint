import Navbar from "../../components/Navbar/Navbar";
import NoteControls from "./components/NoteControls/NoteControls";
import NoteList from "./components/NoteList/NoteList";
import styles from "./styles.module.scss";
import NoteFilterContext from "../../context/NoteFilterContext";
import { useState } from "react";
import {
    TNoteFilter,
    initialFilterState,
} from "../../context/NoteFilterContext";

const Notes = () => {
    const [filter, setFilter] = useState<TNoteFilter>(initialFilterState);
    return (
        <div className={styles.page}>
            <Navbar />
            <h1 className={styles.title}>Notes</h1>
            <NoteFilterContext.Provider value={{ filter, setFilter }}>
                <NoteControls />
                <NoteList />
            </NoteFilterContext.Provider>
        </div>
    );
};

export default Notes;
