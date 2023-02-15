import Button from "../../../../../../../../components/Button";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const NoteCreateActions = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.actions}>
            <Button
                type="submit"
                className={styles.button_primary}
                label="Create Note"
            />
            <Button
                type="button"
                className={styles.button_secondary}
                label="Cancel"
                onClick={() => {
                    navigate("/notes");
                }}
            />
        </div>
    );
};

export default NoteCreateActions;
