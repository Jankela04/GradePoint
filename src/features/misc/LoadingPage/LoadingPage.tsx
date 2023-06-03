import { Spinner } from "@/components/Elements";
import styles from "./LoadingPage.module.scss";
import { useTheme } from "@/context/ThemeContext";
import classNames from "classnames";

function LoadingPage() {
    const { theme } = useTheme();
    return (
        <div className={classNames(styles.page, styles[theme])}>
            <Spinner />
        </div>
    );
}

export default LoadingPage;
