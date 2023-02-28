import { ReactNode } from "react";
import styles from "./styles.module.scss";

const Title = ({ children }: { children: ReactNode }) => {
    return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
