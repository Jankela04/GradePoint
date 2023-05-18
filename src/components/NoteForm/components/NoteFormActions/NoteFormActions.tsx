import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Button from "../../../Button/Button";
import { Mode } from "@/layout/NoteFormLayout/NoteFormLayout";

function NoteFormActions({ mode }: { mode: Mode }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleCancel = () => {
        if (location.state?.fromClass) {
            navigate(`/classes/${location.state.fromClass}`);
        } else {
            navigate("/notes");
        }
    };
    return (
        <div className={styles.actions}>
            <Button
                type="button"
                variant="neutral"
                rounded
                onClick={handleCancel}
            >
                Cancel
            </Button>
            <Button type="submit" variant="primary" rounded>
                {mode === "new" ? "Create" : "Edit"}
                {" "}
                Note
            </Button>
        </div>
    );
}

export default NoteFormActions;
