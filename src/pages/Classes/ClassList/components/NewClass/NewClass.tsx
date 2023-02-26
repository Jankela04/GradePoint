import classNames from "classnames";
import { useTheme } from "../../../../../context/ThemeContext";
import styles from "./styles.module.scss";

const NewClass = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames(styles.card, styles[theme])}>
            <h1>Create a New Class</h1>
        </div>
    );
};

export default NewClass;
