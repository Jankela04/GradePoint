import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import styles from "./styles.module.scss";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.page}>
            <h1>Error 404</h1>
            <h3>Wrong Page</h3>
            <Button
                variant="primary"
                rounded
                onClick={() => {
                    navigate(`/`);
                }}
            >
                Go Back
            </Button>
        </div>
    );
};

export default Error;
