import styles from "./InlineSpinner.module.scss";
import Spinner from "./Spinner";

/**
 * horizontally centered spinner
 */
function InlineSpinner() {
    return (
        <div className={styles.wrapper}>
            <Spinner />
        </div>
    );
}

export default InlineSpinner;
