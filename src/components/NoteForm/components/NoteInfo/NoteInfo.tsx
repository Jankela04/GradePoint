import styles from "./styles.module.scss";
import { useNoteForm } from "../../../../context/NoteFormContext";
import Input from "../../../Input/Input";

const NoteInfo = () => {
    const { form, setForm } = useNoteForm();
    return (
        <div className={styles.note_info}>
            <Input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={(e) => {
                    setForm((prev) => {
                        return { ...prev, title: e.target.value };
                    });
                }}
                className={styles.input}
            />
            <Input
                type="text"
                placeholder="Tag"
                value={form.tag}
                onChange={(e) => {
                    setForm((prev) => {
                        return { ...prev, tag: e.target.value };
                    });
                }}
                className={styles.input}
            />
        </div>
    );
};

export default NoteInfo;
