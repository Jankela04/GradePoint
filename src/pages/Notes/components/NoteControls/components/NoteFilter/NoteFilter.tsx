import { useNoteFilter } from "@/context/NoteFilterContext";
import Input from "@/components/Input/Input";
import styles from "./styles.module.scss";

function NoteFilter() {
    const { filter, setFilter } = useNoteFilter();

    return (
        <Input
            label="Search Notes"
            errorText=""
            id="search"
            type="text"
            value={filter.query}
            className={styles.input}
            placeholder="e.g. Math"
            onChange={(e) => {
                setFilter(() => ({ ...filter, query: e.target.value }));
            }}
        />
    );
}

export default NoteFilter;
