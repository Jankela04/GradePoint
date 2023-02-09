import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./styles.module.scss";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.page}>
            <h1>Error 404</h1>
            <h3>Wrong Page</h3>
            <Button
                label="Go Back"
                className={styles.btn}
                onClick={() => {
                    navigate(`/`);
                }}
            />
        </div>
    );
};

export default Error;
