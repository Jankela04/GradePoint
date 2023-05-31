import { useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { useNavigate } from "react-router-dom";

const removeClass = async (ID: string) => {
    await axios.delete(`/classes/${ID}`);
};

const useDeleteClassMutation = (ID: string) => {
    const navigate = useNavigate();
    const { mutate: deleteClass } = useMutation({
        mutationKey: ["classes", ID],
        mutationFn: () => removeClass(ID),
        onSuccess: () => navigate("/classes"),
    });
    return { deleteClass };
};
export default useDeleteClassMutation;
