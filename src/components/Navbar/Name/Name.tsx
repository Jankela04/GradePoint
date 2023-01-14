import { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import styles from "./styles.module.css";
type Props = {};

const Name = (props: Props) => {
    const [name, setName] = useLocalStorage("name", "");
    const [editMode, setEditMode] = useState(false);

    return (
        <div onClick={() => setEditMode((prev) => !prev)}>
            {editMode ? (
                <form
                    className={styles.form}
                    onSubmit={() => {
                        setEditMode(false);
                    }}
                >
                    <input
                        className={styles.input}
                        autoFocus
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>
            ) : (
                <span className="name">{name}</span>
            )}
        </div>
    );
};

export default Name;
