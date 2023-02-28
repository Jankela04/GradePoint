import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../../context/ThemeContext";
import styles from "./styles.module.scss";

const NewClass = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate("/classes/new")}
            className={classNames(styles.card, styles[theme])}
        >
            <h1>Create a New Class</h1>
        </div>
    );
};

export default NewClass;
