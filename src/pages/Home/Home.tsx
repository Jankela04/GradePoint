import classNames from "classnames";
import useLocalStorage from "@/hooks/useLocalStorage";
import CardContainer from "./components/Card Container/CardContainer";
import styles from "./styles.module.scss";
import { useTheme } from "@/context/ThemeContext";

function Home() {
    const [name] = useLocalStorage("name", "");
    const { theme } = useTheme();

    return (
        <div className={classNames(styles.home, styles[theme])}>
            <h1 className={styles.title}>
                Hello
                {name}
            </h1>
            <CardContainer />
        </div>
    );
}

export default Home;
