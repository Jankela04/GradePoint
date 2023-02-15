import { createContext, Dispatch, SetStateAction } from "react";

type DeleteModalContextProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
};

const DeleteModalContext = createContext<DeleteModalContextProps>({
    setShowModal: () => {},
});

export default DeleteModalContext;
