import Card from "../Card/Card";
import styles from "./styles.module.scss";
import notesIcon from "../../../../assets/notes-icon.png";
import gradeImg from "../../../../assets/grade-icon.png";

const CardContainer = () => {
    return (
        <div className={styles.buttons_container}>
            <Card
                title="Notes"
                icon={notesIcon}
                color={"#1c77c3"}
                to="/notes"
                label="View and Add your Grades"
            />
            <Card
                title="Grades"
                icon={gradeImg}
                color={"#f39237"}
                to="/grades"
                label="View, Take and Edit Notes"
            />
        </div>
    );
};

export default CardContainer;