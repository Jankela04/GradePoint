import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useDeleteModal } from "../../../../../../context/DeleteModalContext";
import Button from "../../../../../../components/Button/Button";

const NoteActions = () => {
    const { showModal, toggleShowModal } = useDeleteModal();
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

    const handleDeleteClick = () => {
        toggleShowModal();
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
                <Button onClick={handleDeleteClick} variant="danger">
                    Delete Note
                </Button>
                {showModal && <DeleteModal />}
            </div>
        </div>
    );
};

export default NoteActions;
