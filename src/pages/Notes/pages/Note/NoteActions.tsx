import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/NoteActions.module.scss";
import { Button } from "@/components/Elements";
import { Modal as DeleteModal } from "@/components/Elements";
import useDeleteNoteMutation from "./api/deleteNote";

type NoteActionsProps = {
    noteId: string;
};

function NoteActions({ noteId }: NoteActionsProps) {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    const navigate = useNavigate();
    const location = useLocation();
    const prevPath = location.state?.prevPath ?? "/notes";

    const { deleteNote } = useDeleteNoteMutation();

    const handleEditClick = () => {
        navigate(`/notes/${noteId}/edit`);
    };

    const handleDelete = () => {
        deleteNote(noteId);
    };

    const handleGoBackClick = () => {
        navigate(prevPath);
    };

    return (
        <div className={styles.btn_container}>
            <Button onClick={handleGoBackClick} variant="neutral" rounded>
                Go Back{" "}
            </Button>
            <div className={styles.note_alter_btn_container}>
                <Button onClick={handleEditClick} variant="primary" rounded>
                    Edit Note
                </Button>
                <Button onClick={openModal} variant="danger">
                    Delete Note
                </Button>
                <DeleteModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    confirmLabel="Delete"
                    onConfirm={handleDelete}
                    title="Are You sure You want to delete this Note?"
                />
            </div>
        </div>
    );
}

export default NoteActions;
