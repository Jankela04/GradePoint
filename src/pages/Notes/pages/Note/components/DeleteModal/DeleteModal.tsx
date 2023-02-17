import { useDeleteModal } from "../../../../../../context/DeleteModalContext";
import styles from "./styles.module.scss";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../../../../../components/Button/Button";

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
                <Button onClick={handleCancelClick} variant="neutral" rounded>
                    Cancel
                </Button>
                <Button onClick={handleDeleteConfirm} variant="danger">
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default DeleteModal;
