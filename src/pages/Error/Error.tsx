import { useNavigate } from "react-router-dom";
import { Button, Head } from "@/components/Elements";
import styles from "./styles.module.scss";

function Error() {
    const navigate = useNavigate();
    return (
        <>
            <Head title="Error" />
            <div className={styles.page}>
                <h1>Error 404</h1>
                <h3>Wrong Page</h3>
                <Button
                    variant="secondary"
                    rounded
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go Back
                </Button>
            </div>
        </>
    );
}

export default Error;
