import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/NoteActions.module.scss";
import { Button } from "@/components/Elements";
import { Modal as DeleteModal } from "@/components/Elements";
import axios from "@/lib/axios";

function NoteActions() {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.prevPath ?? "/notes";

    const { id } = useParams();

    const handleEditClick = () => {
        navigate(`/notes/${id}/edit`);
    };

    const handleGoBackClick = () => {
        navigate(path);
    };

    const deleteNote = async () => {
        await axios.delete(`/notes/${id}`);
        navigate(path);
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
                    onConfirm={deleteNote}
                    title="Are You sure You want to delete this Note?"
                />
            </div>
        </div>
    );
}

export default NoteActions;