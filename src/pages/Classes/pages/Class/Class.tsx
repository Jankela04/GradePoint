import { useParams } from "react-router-dom";
import Title from "../../../../components/Title/Title";
import useFetch from "../../../../hooks/useFetch";
import CalculateGpa from "../../../../utils/CalculateGpa";
import { Class as TClass } from "../../ClassList/ClassList";
import styles from "./styles.module.scss";
import { v4 } from "uuid";
import { shortFormatDate } from "../../../../utils/FormatDate";
import { useTheme } from "../../../../context/ThemeContext";
import classNames from "classnames";
import Button from "../../../../components/Button/Button";

const Class = () => {
    const { id } = useParams();
    const {
        data: classObj,
        loading,
        error,
    } = useFetch<TClass>(`/classes/${id}`);
    const { theme } = useTheme();
    if (loading) return <Title>Loading...</Title>;

    if (error || !classObj) return <Title>Something Went Wrong</Title>;

    return (
        <>
            <Title>{classObj?.class}</Title>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.info}>
                        <span>Teacher: {classObj.teacher}</span>
                        <span>Gpa: {CalculateGpa(classObj)}</span>
                        <span>
                            Grades:{" "}
                            {classObj.grades.length === 0
                                ? "No Grades"
                                : classObj.grades
                                      .map((grade) => grade.grade)
                                      .join(", ")}
                        </span>
                    </div>
                    <div className={styles.actions}>
                        <Button rounded variant="danger">
                            Delete Class
                        </Button>
                        <Button rounded variant="secondary">
                            New Grade
                        </Button>
                    </div>
                </div>
                <div className={styles.grades}>
                    {classObj.grades.length === 0 ? (
                        <span>This class has no grades</span>
                    ) : (
                        classObj.grades.map((grade) => (
                            <div
                                key={v4()}
                                className={classNames(
                                    styles.grade,
                                    styles[theme]
                                )}
                            >
                                <h3>{grade.grade}</h3>
                                <span>Date: {shortFormatDate(grade.date)}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Class;
