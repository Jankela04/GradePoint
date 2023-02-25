import Logo from "../Logo/Logo";
import Name from "./components/Name/Name";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useTheme } from "../../context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const { theme } = useTheme();
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };
    const handleClick = () => {
        setShowMenu(false);
    };
    return (
        <nav className={classNames(styles.navbar, styles[theme])}>
            <div className={styles.left_side}>
                <Logo type={"small"} />
                <button className={styles.button} onClick={toggleMenu}>
                    {!showMenu ? <MenuOpenIcon /> : <MenuCloseIcon />}
                </button>
                <div
                    className={
                        showMenu
                            ? classNames(
                                  styles.links,
                                  styles.active,
                                  styles[theme]
                              )
                            : styles.links
                    }
                >
                    <Link
                        className={styles[theme]}
                        onClick={handleClick}
                        to="/notes"
                    >
                        Notes
                    </Link>
                    <Link
                        className={styles[theme]}
                        onClick={handleClick}
                        to="/classes"
                    >
                        Classes
                    </Link>
                </div>
            </div>
            <div className={styles.right_side}>
                <ThemeSwitcher />
                <Name />
            </div>
        </nav>
    );
};

export default Navbar;

const MenuOpenIcon = () => {
    const { theme } = useTheme();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={theme === "light" ? "#000" : "#FFF"}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    );
};

const MenuCloseIcon = () => {
    const { theme } = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={theme === "light" ? "#000" : "#FFF"}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
};
