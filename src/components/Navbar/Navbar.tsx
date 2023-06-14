import classNames from "classnames";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Logo } from "../Elements";
import Name from "./components/Name/Name";
import styles from "./styles.module.scss";
import { useTheme } from "@/context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

function Navbar() {
    const { theme } = useTheme();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };
    const handleClick = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 550 && setIsMobileMenuOpen(false)
        );

        return () => {
            window.removeEventListener(
                "resize",
                () => window.innerWidth >= 550 && setIsMobileMenuOpen(false)
            );
        };
    }, []);

    return (
        <Container>
            <nav
                className={classNames(
                    styles.navbar,
                    styles[theme],
                    styles.full_bleed
                )}
            >
                <div className={styles.left_side}>
                    <Logo type="small" />
                    <button
                        className={styles.button}
                        onClick={toggleMenu}
                        type="button"
                    >
                        {!isMobileMenuOpen ? (
                            <MenuOpenIcon />
                        ) : (
                            <MenuCloseIcon />
                        )}
                    </button>
                    <div
                        className={classNames(
                            styles.desktop_links,
                            styles[theme]
                        )}
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
            {isMobileMenuOpen && (
                <div className={classNames(styles.mobile_links, styles[theme])}>
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
            )}
        </Container>
    );
}

export default Navbar;

function MenuOpenIcon() {
    const { theme } = useTheme();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
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
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    );
}

function MenuCloseIcon() {
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
}
