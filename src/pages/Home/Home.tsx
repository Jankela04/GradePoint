import classNames from "classnames";
import useLocalStorage from "@/hooks/useLocalStorage";
import styles from "./home.module.scss";
import { useTheme } from "@/context/ThemeContext";
import notesIcon from "@/assets/notes-icon.png";
import gradeImg from "@/assets/grade-icon.png";
import Card from "./Card";
import { Container, Head } from "@/components/Elements";

function Home() {
    const [name] = useLocalStorage("name", "");
    const { theme } = useTheme();

    return (
        <>
            <Head title="Home" description="Home Page of GradePoint" />
            <div className={classNames(styles.home, styles[theme])}>
                <h1 className={styles.title}>{`Hello ${name}`}</h1>
                <Container>
                    <div className={styles.buttons_container}>
                        <Card
                            title="Notes"
                            icon={notesIcon}
                            color="#007bff"
                            to="/notes"
                            label="View, Take and Edit Notes"
                        />
                        <Card
                            title="Classes"
                            icon={gradeImg}
                            color="#ff8c00"
                            to="/classes"
                            label="View Classes and Grades"
                        />
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Home;
