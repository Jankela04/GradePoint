import ReactModal from "react-modal";
import styles from "./styles.module.scss";
import Button from "../Button/Button";

type ModalProps = {
    isOpen: boolean;
    closeModal: () => any;
    title: string;
    confirmLabel: string;
    onConfirm: () => void;
};

const modalStyles = {
    overlay: {
        position: "fixed" as "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        background: "#303030",
    },
};

function Modal({
    isOpen,
    closeModal,
    title,
    confirmLabel,
    onConfirm,
}: ModalProps) {
    return (
        <ReactModal
            className={styles.modal}
            isOpen={isOpen}
            preventScroll
            shouldCloseOnOverlayClick
            style={modalStyles}
            onRequestClose={closeModal}
            appElement={document.getElementById("root")!}
        >
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.actions}>
                <Button
                    variant="neutral"
                    className={styles.cancel_btn}
                    rounded
                    onClick={closeModal}
                >
                    Cancel
                </Button>
                <Button variant="danger" rounded onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </ReactModal>
    );
}

export default Modal;
