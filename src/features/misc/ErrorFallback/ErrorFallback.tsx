import classNames from "classnames";
import styles from "./ErrorFallback.module.scss";
import { Button } from "@/components/Elements";

type ErrorFallbackProps = {
    error: any;
};

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
    return (
        <div className={classNames(styles.page)}>
            <div className={styles.card}>
                <h1>Oops!</h1>
                <span>Something Went Wrong</span>
                <span>{error?.message}</span>
                <Button
                    variant="primary"
                    rounded
                    onClick={() => window.location.reload()}
                >
                    Reload
                </Button>
            </div>
        </div>
    );
};

export default ErrorFallback;
