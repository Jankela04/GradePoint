import { useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { type Class } from "@/types";
import { useNavigate } from "react-router-dom";

const createNewClass = async (newClass: Class) => {
    await axios.post("/classes", newClass);
    return newClass;
};

const useCreateClassMutation = () => {
    const navigate = useNavigate();
    const { mutate: createClass } = useMutation({
        mutationFn: (data: Class) => createNewClass(data),
        onSuccess: (data) => navigate(`/classes/${data.id}`),
    });
    return { createClass };
};
export default useCreateClassMutation;
