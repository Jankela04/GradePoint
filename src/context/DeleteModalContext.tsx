import { createContext, ReactNode,useState, useContext } from "react";

type DeleteModalContextProps = {
    showModal: boolean
    toggleShowModal: ()=>void;
};

const DeleteModalContext = createContext<DeleteModalContextProps>({
    showModal: false,
    toggleShowModal: () => {},
});

const DeleteModalProvider = ({children}:{children:ReactNode}) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const toggleShowModal = () =>{
        setShowModal((prev) => (prev === true ? false : true));
    }

    return(
    <>
        <DeleteModalContext.Provider value={{ showModal, toggleShowModal }}>
            {children}
        </DeleteModalContext.Provider>
    </>
    )
}
const useDeleteModal = () =>{
    const {showModal, toggleShowModal} = useContext(DeleteModalContext)
    return {showModal,toggleShowModal}
}

export {DeleteModalProvider, useDeleteModal}

export default DeleteModalContext;

