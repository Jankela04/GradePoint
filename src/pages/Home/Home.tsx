import { Navigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import CardContainer from "./components/Card Container/CardContainer";
import styles from "./styles.module.scss";

const Home = () => {
    const [name] = useLocalStorage("name", "");

    return (
        <>
            {name ? (
                <div className={styles.home}>
                    <h1 className={styles.title}>Hello {name}</h1>
                    <CardContainer />
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

export default Home;
