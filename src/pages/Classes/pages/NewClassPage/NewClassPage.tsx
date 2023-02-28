import NewClassForm from "./components/NewClassForm/NewClassForm";
import styles from "./styles.module.scss";

const NewClassPage = () => {
    return (
        <>
            <h1 className={styles.title}>Create New Class</h1>
            <NewClassForm />
        </>
    );
};

export default NewClassPage;
