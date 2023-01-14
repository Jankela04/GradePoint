import Logo from "../Logo/Logo";
import Name from "./Name/Name";
import styles from "./styles.module.css";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className={styles.navbar}>
            <Logo type={"small"} />
            <Name />
        </nav>
    );
};

export default Navbar;
