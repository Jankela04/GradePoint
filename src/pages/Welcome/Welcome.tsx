import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./styles.module.scss";
import Logo from "../../components/Logo/Logo";
import RegisterForm from "./RegisterForm/RegisterForm";
import { Navigate } from "react-router-dom";

type Props = {};

const Welcome = (props: Props) => {
    const [name] = useLocalStorage("name", "");

    return (
        <div className={styles.home}>
            <h1 className={styles.title}>
                Welcome to <Logo type={"big"} />
            </h1>

            {name === "" ? <RegisterForm /> : <Navigate to="/home" />}
        </div>
    );
};

export default Welcome;
