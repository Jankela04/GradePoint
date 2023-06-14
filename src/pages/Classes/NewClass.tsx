import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import styles from "./styles/NewClass.module.scss";

function NewClass() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            navigate("/classes/new");
        }
    };
    return (
        <div
            role="button"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className={classNames(styles.card, styles[theme])}
        >
            <Link to="/classes/new">
                <h1>Create a New Class</h1>
            </Link>
        </div>
    );
}

export default NewClass;
