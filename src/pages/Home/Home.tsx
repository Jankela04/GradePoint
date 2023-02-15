import useLocalStorage from "../../hooks/useLocalStorage";
import CardContainer from "./components/Card Container/CardContainer";
import styles from "./styles.module.scss";

const Home = () => {
    const [name] = useLocalStorage("name", "");

    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Hello {name}</h1>
            <CardContainer />
        </div>
    );
};

export default Home;
