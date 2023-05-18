import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import styles from "./styles.module.scss";

function NewClass() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    return (
        <button
            type="button"
            onClick={() => navigate("/classes/new")}
            className={classNames(styles.card, styles[theme])}
        >
            <h1>Create a New Class</h1>
        </button>
    );
}

export default NewClass;
