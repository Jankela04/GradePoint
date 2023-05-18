import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import styles from "./styles.module.scss";

type Props = {
    type: "large" | "small";
};

function Logo({ type }: Props) {
    const className = type === "large" ? styles.large : styles.small;
    const navigate = useNavigate();
    return (
        <span
            className={classnames(className, styles.logo)}
            onClick={() => {
                navigate("/home");
            }}
        >
            <span className={styles.grade}>Grade</span>
            <span className={styles.point}>Point</span>
        </span>
    );
}

export default Logo;
