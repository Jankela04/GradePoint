import Input from "../../../../../../../../components/Input";
import styles from "./styles.module.scss";
import { useContext } from "react";
import NewNoteFormContext from "../../../../../../../../context/NewNoteFormContext";

const NoteInfo = () => {
    const { form, setForm } = useContext(NewNoteFormContext);
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