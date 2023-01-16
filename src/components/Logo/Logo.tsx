import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
    type: "large" | "small";
};

const Logo = ({ type }: Props) => {
    const className = type === "large" ? styles.large : styles.small;
    const navigate = useNavigate();
    return (
        <span
            className={`${className} ${styles.logo}`}
            onClick={() => {
                navigate("/home");
            }}
        >
            <span className={styles.grade}>Grade</span>
            <span className={styles.point}>Point</span>
        </span>
    );
};

export default Logo;
