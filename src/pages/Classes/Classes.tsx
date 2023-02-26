import ClassList from "./ClassList/ClassList";
import styles from "./styles.module.scss";
const Classes = () => {
    return (
        <>
            <h1 className={styles.title}>Classes</h1>
            <ClassList />
        </>
    );
};

export default Classes;
