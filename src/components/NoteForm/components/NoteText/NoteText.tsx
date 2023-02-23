import styles from "./styles.module.scss";
import { useNoteForm } from "../../../../context/NoteFormContext";
import classNames from "classnames";
import { useTheme } from "../../../../context/ThemeContext";

const NoteText = () => {
    const { form, setForm } = useNoteForm();
    const { theme } = useTheme();
    return (
        <textarea
            value={form.text}
            onChange={(e) =>
                setForm((prev) => {
                    return { ...prev, text: e.target.value };
                })
            }
            className={classNames(styles.textarea, styles[theme])}
            placeholder="Your note..."
        ></textarea>
    );
};

export default NoteText;