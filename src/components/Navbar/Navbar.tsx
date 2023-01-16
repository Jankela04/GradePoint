import Logo from "../Logo/Logo";
import Name from "./Name/Name";
import styles from "./styles.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Logo type={"small"} />
            <Name />
        </nav>
    );
};

export default Navbar;
