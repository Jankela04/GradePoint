import styles from "./styles.module.scss";
import { useNewNoteForm } from "../../../../../../../../context/NewNoteFormContext";

const NoteText = () => {
    const { form, setForm } = useNewNoteForm();
    return (
        <textarea
            value={form.text}
            onChange={(e) =>
                setForm((prev) => {
                    return { ...prev, text: e.target.value };
                })
            }
            className={styles.textarea}
            placeholder="Your note..."
        ></textarea>
    );
};

export default NoteText;
