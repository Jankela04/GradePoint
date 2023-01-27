import Input from "../../../../../../components/Input";
import styles from "./styles.module.scss";
import { useContext } from "react";

import NoteFilterContext from "../../../../../../context/NoteFilterContext";

const NoteFilter = () => {
    const { filter, setFilter } = useContext(NoteFilterContext);

    return (
        <Input
            type="text"
            value={filter.query}
            placeholder="Search Notes"
            onChange={(e) => {
                setFilter(() => {
                    return { ...filter, query: e.target.value };
                });
            }}
            className={styles.input}
        />
    );
};

export default NoteFilter;
