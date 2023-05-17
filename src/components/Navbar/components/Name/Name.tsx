import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import styles from "./styles.module.scss";

const Name = () => {
    const [name, setName] = useLocalStorage("name", "");
    const [editMode, setEditMode] = useState(false);
    const { theme } = useTheme();
    return (
        <div
            onBlur={() => {
                setEditMode(false);
            }}
            onClick={() => setEditMode(true)}
            className={styles[theme]}
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
