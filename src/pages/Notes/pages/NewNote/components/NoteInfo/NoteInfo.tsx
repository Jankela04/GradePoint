import { useState } from "react";
import Input from "../../../../../../components/Input";
import styles from "./styles.module.scss";

const NoteInfo = () => {
    const [inputValue, setinputValue] = useState("");
    const [tagValue, setTagValue] = useState("");
    return (
        <div className={styles.note_info}>
            <Input
                type="text"
                placeholder="Title"
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
                className={styles.input}
            />
            <Input
                type="text"
                placeholder="Tag"
                value={tagValue}
                onChange={(e) => setTagValue(e.target.value)}
                className={styles.input}
            />
        </div>
    );
};

export default NoteInfo;
