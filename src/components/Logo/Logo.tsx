import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
    type: "big" | "small";
};

const Logo = ({ type }: Props) => {
    const navigate = useNavigate();
    return (
        <span
            style={{
                fontSize: type == "big" ? "3rem" : "1.5rem",
                cursor: type == "small" ? "pointer" : "text",
            }}
            className={styles.logo}
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
