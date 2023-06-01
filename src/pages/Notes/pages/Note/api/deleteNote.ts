import { useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { useLocation, useNavigate } from "react-router-dom";

const removeNote = async (ID: string) => {
    await axios.delete(`/notes/${ID}`);
};

const useDeleteNoteMutation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const prevPath = location.state?.prevPath ?? "/notes";

    const { mutate: deleteNote } = useMutation({
        mutationFn: (ID: string) => removeNote(ID),
        onSuccess: () => {
            navigate(prevPath);
        },
    });
    return { deleteNote };
};
export default useDeleteNoteMutation;
