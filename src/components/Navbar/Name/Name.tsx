import { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import styles from "./styles.module.scss";
type Props = {};

const Name = (props: Props) => {
    const [name, setName] = useLocalStorage("name", "");
    const [editMode, setEditMode] = useState(false);
    return (
        <div
            onBlur={() => {
                setEditMode(false);
            }}
            onClick={() => setEditMode(true)}
        >
            {editMode ? (
                <form
                    className={styles.form}
                    onSubmit={() => {
                        setEditMode(false);
                    }}
                >
                    <input
                        style={{ width: name.length / 1.11 + "ch" }}
                        className={styles.input}
                        autoFocus
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>
            ) : (
                <span className={styles.name}>{name}</span>
            )}
        </div>
    );
};

export default Name;
