import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../../../../components/Button/Button";
import { Mode } from "../../../../../../../../layout/NoteFormLayout/NoteFormLayout";

const NoteFormActions = ({ mode }: { mode: Mode }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.actions}>
            <Button
                type="button"
                variant="neutral"
                rounded
                onClick={() => {
                    navigate("/notes");
                }}
            >
                Cancel
            </Button>
            <Button type="submit" variant="primary" rounded>
                {mode === "new" ? "Create" : "Edit"} Note
            </Button>
        </div>
    );
};

export default NoteFormActions;
