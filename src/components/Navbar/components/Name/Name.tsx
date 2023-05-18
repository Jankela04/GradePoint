/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import styles from "./styles.module.scss";

function Name() {
    const [name, setName] = useLocalStorage("name", "");
    const [editMode, setEditMode] = useState(false);
    const { theme } = useTheme();

    const handleClick = () => {
        setEditMode(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") handleClick();
    };

    return (
        <div
            role="button"
            onBlur={() => {
                setEditMode(false);
            }}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
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
                        style={{ width: `${name.length / 1.11}ch` }}
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
}

export default Name;
