import { ReactNode } from "react";
import classNames from "classnames";
import Navbar from "@/components/Navbar/Navbar";
import { useTheme } from "@/context/ThemeContext";
import styles from "./styles.module.scss";

type Props = {
    children: ReactNode;
};

function MainLayout({ children }: Props) {
    const { theme } = useTheme();
    return (
        <div className={classNames(styles.main_layout, styles[theme])}>
            <Navbar />
            {children}
        </div>
    );
}

export default MainLayout;
