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
                color={"#007bff"}
                to="/notes"
                label="View, Take and Edit Notes"
            />
            <Card
                title="Classes"
                icon={gradeImg}
                color={"#ff8c00"}
                to="/classes"
                label="View Classes and Grades"
            />
        </div>
    );
};

export default CardContainer;
