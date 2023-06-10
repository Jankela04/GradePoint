import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            navigate(`/classes/${classObj.id}`, {});
        }
    };

    return (
        <div
            role="button"
            tabIndex={0}
            className={classNames(styles.class_card, styles[theme])}
            onKeyDown={handleKeyDown}
        >
            <Link to={`/classes/${classObj.id}`}>
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
            </Link>
        </div>
    );
}

export default ClassCard;
