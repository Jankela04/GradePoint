import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../../../../components/Button/Button";

const NoteCreateActions = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.actions}>
            <Button type="submit" variant="primary" rounded>
                Create Note
            </Button>
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
        </div>
    );
};

export default NoteCreateActions;
