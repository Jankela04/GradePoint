import classNames from "classnames";
import { useTheme } from "../../../../../context/ThemeContext";
import CalculateGpa from "../../../../../utils/CalculateGpa";
import { Class } from "../../ClassList";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";

type Props = {
    classObj: Class;
};

const ClassCard = ({ classObj }: Props) => {
    const { theme } = useTheme();
    return (
        <div className={classNames(styles.class_card, styles[theme])}>
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
