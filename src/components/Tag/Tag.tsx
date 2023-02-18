import classNames from "classnames";
import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.scss";

const Tag = ({ tag }: { tag?: string }) => {
    const { theme } = useTheme();
    return tag ? (
        <span className={classNames(styles.tag, styles[theme])}>{tag}</span>
    ) : null;
};

export default Tag;
