import classNames from "classnames";
import { v4 } from "uuid";
import { useTheme } from "@/context/ThemeContext";
import { shortFormatDate } from "@/utils/FormatDate";
import { Grade } from "@/types";
import styles from "./styles/GradeList.module.scss";

function GradeList({ grades }: { grades: Grade[] }) {
    const { theme } = useTheme();
    return (
        <div className={styles.grades}>
            {grades.length === 0 ? (
                <span />
            ) : (
                grades.map((grade) => (
                    <div
                        key={v4()}
                        className={classNames(styles.grade, styles[theme])}
                    >
                        <h3>{grade.grade}</h3>
                        <span>
                            Date:
                            {shortFormatDate(grade.date)}
                        </span>
                    </div>
                ))
            )}
        </div>
    );
}

export default GradeList;
