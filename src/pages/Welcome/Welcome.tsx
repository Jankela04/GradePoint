import classnames from "classnames";
import styles from "./styles.module.scss";
import { Logo } from "@/components/Elements";
import RegisterForm from "./RegisterForm";
import { useTheme } from "@/context/ThemeContext";

function Welcome() {
    const { theme } = useTheme();
    return (
        <div className={classnames(styles.home, styles[theme])}>
            <h1 className={styles.title}>
                Welcome to <Logo type="large" />
            </h1>

            <RegisterForm />
        </div>
    );
}

export default Welcome;
