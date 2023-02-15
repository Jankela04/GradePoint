import Button from "../../../../../../components/Button";
import { useDeleteModal } from "../../../../../../context/DeleteModalContext";
import styles from "./styles.module.scss";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteModal = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toggleShowModal } = useDeleteModal();

    const handleCancelClick = () => {
        toggleShowModal();
    };
    const handleDeleteConfirm = async () => {
        try {
            await axios.delete(`http://localhost:3000/notes/${id}`);
            navigate("/notes");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className={styles.modal}>
            <span className={styles.label}>Are you Sure?</span>
            <div className={styles.btn_container}>
                <Button
                    onClick={handleCancelClick}
                    label="Cancel"
                    className={`${styles.btn} ${styles.btn_cancel}`}
                />
                <Button
                    onClick={handleDeleteConfirm}
                    label="Delete"
                    className={`${styles.btn} ${styles.btn_delete}`}
                />
            </div>
        </div>
    );
};

export default DeleteModal;
