import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import NoteFilter from "./components/NoteFilter/NoteFilter";
import styles from "./styles.module.scss";

const NoteControls = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.note_controls}>
            <NoteFilter />
            <Button
                label="New Note"
                className={styles.button}
                onClick={() => navigate("/notes/new")}
            />
        </div>
    );
};

export default NoteControls;
