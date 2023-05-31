import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import CalculateGpa from "@/utils/CalculateGpa";
import { Class } from "@/types";
import styles from "./styles/ClassCard.module.scss";

type Props = {
    classObj: Class;
};

function ClassCard({ classObj }: Props) {
    const { theme } = useTheme();
    const navigate = useNavigate();
    return (
        <button
            type="button"
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
        </button>
    );
}

export default ClassCard;