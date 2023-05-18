import classNames from "classnames";
import styles from "./styles.module.scss";
import { useNoteForm } from "@/context/NoteFormContext";
import { useTheme } from "@/context/ThemeContext";

function NoteText() {
    const { form, setForm } = useNoteForm();
    const { theme } = useTheme();
    return (
        <textarea
            value={form.text}
            onChange={(e) => setForm((prev) => ({ ...prev, text: e.target.value }))}
            className={classNames(styles.textarea, styles[theme])}
            placeholder="Your note..."
        />
    );
}

export default NoteText;
