import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles.module.scss";

const Notes = () => {
    return (
        <div className={styles.page}>
            <Navbar />
            <h1 className={styles.title}>Notes</h1>
        </div>
    );
};

export default Notes;
