import Logo from "../Logo/Logo";
import Name from "./components/Name/Name";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useTheme } from "../../context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
    const { theme } = useTheme();
    return (
        <nav className={classNames(styles.navbar, styles[theme])}>
            <div className={styles.left_side}>
                <Logo type={"small"} />
            </div>
            <div className={styles.right_side}>
                <ThemeSwitcher />
                <Name />
            </div>
        </nav>
    );
};

export default Navbar;
