import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Title } from "@/components/Elements";
import CalculateGpa from "@/utils/CalculateGpa";
import styles from "./styles/Class.module.scss";
import { Button } from "@/components/Elements";
import GradeList from "./GradeList";
import ClassNotes from "./ClassNotes";
import { Modal as DeleteModal } from "@/components/Elements";
import useClassQuery from "./api/getClass";
import useClassNotesQuery from "./api/getClassNotes";
import useDeleteClassMutation from "./api/deleteClass";

export type ClassPageParams = {
    id: string;
};

function Class() {
    const { id } = useParams() as ClassPageParams;
    const navigate = useNavigate();
    const { data: classObj, isLoading, error } = useClassQuery(id);
    const { data: notes, isLoading: notesLoading } = useClassNotesQuery(
        classObj?.class
    );

    const { deleteClass } = useDeleteClassMutation(id);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const closeModal = () => setModalIsOpen(false);
    const openModal = () => setModalIsOpen(true);

    if (isLoading || notesLoading) return <Title>Loading...</Title>;

    if (error || !classObj || !notes)
        return <Title>Something Went Wrong</Title>;

    return (
        <>
            <Title>{classObj?.class}</Title>
            <Container>
                <div className={styles.header}>
                    <div className={styles.info}>
                        <span>
                            Teacher:
                            {classObj.teacher}
                        </span>
                        <span>
                            Gpa:
                            {CalculateGpa(classObj)}
                        </span>
                        <span>
                            Grades:{" "}
                            {classObj.grades.length === 0
                                ? "No Grades"
                                : classObj.grades
                                      .map((grade) => grade.grade)
                                      .join(", ")}
                        </span>
                        <span>
                            Notes:
                            {notes.length}
                        </span>
                    </div>
                    <div className={styles.actions}>
                        <Button
                            rounded
                            variant="danger"
                            onClick={() => openModal()}
                        >
                            Delete Class
                        </Button>
                        <Button
                            rounded
                            variant="secondary"
                            onClick={() =>
                                navigate(`/classes/${classObj.id}/newGrade`, {
                                    state: { id: classObj.id },
                                })
                            }
                        >
                            New Grade
                        </Button>
                    </div>
                </div>
                <DeleteModal
                    isOpen={modalIsOpen}
                    closeModal={closeModal}
                    confirmLabel="Delete"
                    onConfirm={deleteClass}
                    title="Are You sure You want to delete Class?"
                />
                <GradeList grades={classObj.grades} />
                <ClassNotes classObj={classObj} notes={notes} />
            </Container>
        </>
    );
}

export default Class;
