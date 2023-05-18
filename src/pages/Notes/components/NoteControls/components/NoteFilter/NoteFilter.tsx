import { useNoteFilter } from "@/context/NoteFilterContext";
import Input from "@/components/Input/Input";
import styles from "./styles.module.scss";

function NoteFilter() {
    const { filter, setFilter } = useNoteFilter();

    return (
        <Input
            type="text"
            value={filter.query}
            className={styles.input}
            placeholder="Search Notes"
            onChange={(e) => {
                setFilter(() => ({ ...filter, query: e.target.value }));
            }}
        />
    );
}

export default NoteFilter;
