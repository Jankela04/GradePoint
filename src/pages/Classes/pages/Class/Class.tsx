import { useNavigate, useParams } from "react-router-dom";
import Title from "@/components/Title/Title";
import useFetch from "@/hooks/useFetch";
import CalculateGpa from "@/utils/CalculateGpa";
import { Class as TClass } from "../../ClassList/ClassList";
import styles from "./styles.module.scss";
import Button from "@/components/Button/Button";
import GradeList from "./components/GradeList/GradeList";
import { TNote } from "@/components/NoteList/NoteList";
import ClassNotes from "./components/ClassNotes/ClassNotes";
import DeleteModal from "@/components/Modal/Modal";
import { useState } from "react";
import axiosService from "@/services/axios";

const Class = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        data: classObj,
        loading,
        error,
    } = useFetch<TClass>(`/classes/${id}`);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const closeModal = () => setModalIsOpen(false);
    const openModal = () => setModalIsOpen(true);
    const deleteClass = async () => {
        await axiosService.delete(`/classes/${classObj?.id}`);
        navigate(`/classes`);
    };

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
                    confirmLabel={"Delete"}
                    onConfirm={deleteClass}
                    title={"Are You sure You want to delete Class?"}
                />
                <GradeList grades={classObj.grades} />
                <ClassNotes classObj={classObj} notes={notes} />
            </div>
        </>
    );
};

export default Class;
