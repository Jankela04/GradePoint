import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Elements";
import styles from "./styles/NoteControls.module.scss";
import { useNoteFilter } from "@/context/NoteFilterContext";
import { Input } from "@/components/Elements";

function NoteControls() {
    const { filter, setFilter } = useNoteFilter();
    const navigate = useNavigate();

    return (
        <div className={styles.note_controls}>
            <Input
                label="Search Notes"
                errorText=""
                id="search"
                type="text"
                value={filter.query}
                style={{ width: "100%" }}
                placeholder="e.g. Math"
                onChange={(e) => {
                    setFilter(() => ({ ...filter, query: e.target.value }));
                }}
            />
            <Button
                variant="primary"
                rounded
                onClick={() => navigate("/notes/new")}
            >
                New Note
            </Button>
        </div>
    );
}

export default NoteControls;
