import classNames from "classnames";
import { useTheme } from "../../../../../context/ThemeContext";
import CalculateGpa from "../../../../../utils/CalculateGpa";
import { Class } from "../../ClassList";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

type Props = {
    classObj: Class;
};

const ClassCard = ({ classObj }: Props) => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    return (
        <div
            className={classNames(styles.class_card, styles[theme])}
            onClick={() => navigate(`/classes/${classObj.id}`)}
        >
            <h3>{classObj.class}</h3>
            <div className={classNames(styles.divider, styles[theme])} />
            <div className={styles.grades}>
                <div className={styles.grades_list}>
                    {classObj.grades.map((grade) => (
                        <span className={styles.grade} key={uuidv4()}>
                            {grade.grade}
                        </span>
                    ))}
                </div>
                <div className={classNames(styles.gpa, styles[theme])}>
                    {CalculateGpa(classObj)}
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
