import { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import classNames from "classnames";
import { useTheme } from "../context/ThemeContext";
import styles from "./styles.module.scss";

type Props = {
    children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
    const { theme } = useTheme();
    return (
        <div className={classNames(styles.main_layout, styles[theme])}>
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;
