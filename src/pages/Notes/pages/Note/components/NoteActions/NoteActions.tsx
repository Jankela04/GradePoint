import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Button from "../../../../../../components/Button";
import styles from "./styles.module.scss";
import DeleteModal from "../DeleteModal/DeleteModal";
import DeleteModalContext from "../../../../../../context/DeleteModalContext";

const NoteActions = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleEditClick = () => {
        navigate(`/notes/${id}/edit`);
    };

    const handleGoBackClick = () => {
        navigate(`/notes`);
    };

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    return (
        <DeleteModalContext.Provider value={{ setShowModal }}>
            <div className={styles.btn_container}>
                <Button
                    onClick={handleGoBackClick}
                    label="Go Back"
                    className={`${styles.btn} ${styles.btn_cancel}`}
                />
                <div className={styles.note_alter_btn_container}>
                    <Button
                        onClick={handleEditClick}
                        label="Edit Note"
                        className={`${styles.btn_edit} ${styles.btn}`}
                    />
                    <Button
                        onClick={handleDeleteClick}
                        label="Delete Note"
                        className={`${styles.btn_delete} ${styles.btn}`}
                    />
                    {showModal && <DeleteModal />}
                </div>
            </div>
        </DeleteModalContext.Provider>
    );
};

export default NoteActions;
