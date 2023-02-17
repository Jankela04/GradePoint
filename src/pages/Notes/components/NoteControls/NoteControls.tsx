import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import NoteFilter from "./components/NoteFilter/NoteFilter";
import styles from "./styles.module.scss";

const NoteControls = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.note_controls}>
            <NoteFilter />
            <Button
                variant="primary"
                rounded
                onClick={() => navigate("/notes/new")}
            >
                New Note
            </Button>
        </div>
    );
};

export default NoteControls;
