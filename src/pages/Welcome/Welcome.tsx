import styles from "./styles.module.scss";
import Logo from "../../components/Logo/Logo";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const Welcome = () => {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>
                Welcome to <Logo type={"large"} />
            </h1>

            <RegisterForm />
        </div>
    );
};

export default Welcome;
