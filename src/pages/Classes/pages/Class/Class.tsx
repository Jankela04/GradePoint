import { useParams } from "react-router-dom";
import Title from "../../../../components/Title/Title";
import useFetch from "../../../../hooks/useFetch";
import CalculateGpa from "../../../../utils/CalculateGpa";
import { Class as TClass } from "../../ClassList/ClassList";
import styles from "./styles.module.scss";
import Button from "../../../../components/Button/Button";
import GradeList from "./components/GradeList/GradeList";
import { TNote } from "../../../../components/NoteList/NoteList";
import ClassNotes from "./components/ClassNotes/ClassNotes";

const Class = () => {
    const { id } = useParams();
    const {
        data: classObj,
        loading,
        error,
    } = useFetch<TClass>(`/classes/${id}`);

    const { data: notes, loading: notesLoading } = useFetch<TNote[]>(
        `/notes?tag=${classObj?.class}`
    );

    if (loading || notesLoading) return <Title>Loading...</Title>;

    if (error || !classObj || !notes)
        return <Title>Something Went Wrong</Title>;

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
                        <span>Notes: {notes.length}</span>
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
                <GradeList grades={classObj.grades} />
                <ClassNotes classObj={classObj} notes={notes} />
            </div>
        </>
    );
};

export default Class;
