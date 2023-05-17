import { useNoteFilter } from "@/context/NoteFilterContext";
import Input from "@/components/Input/Input";
import styles from "./styles.module.scss";

const NoteFilter = () => {
    const { filter, setFilter } = useNoteFilter();

    return (
        <Input
            type="text"
            value={filter.query}
            className={styles.input}
            placeholder="Search Notes"
            onChange={(e) => {
                setFilter(() => {
                    return { ...filter, query: e.target.value };
                });
            }}
        />
    );
};

export default NoteFilter;
