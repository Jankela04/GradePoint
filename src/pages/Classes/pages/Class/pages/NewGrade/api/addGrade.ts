import axios from "@/lib/axios";
import { Class, Grade } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type AddGradeData = {
    grade: Grade;
    classObj: Class;
};

const addNewGrade = async (data: AddGradeData) => {
    const { classObj, grade } = data;
    const newClass: Class = {
        ...classObj,
        grades: [...classObj.grades, grade],
    };
    await axios.put(`/classes/${classObj?.id}`, newClass);
};

const useAddGradeMutation = (classID: string) => {
    const navigate = useNavigate();
    const { mutate: addGrade } = useMutation({
        mutationKey: ["class", "grade"],
        mutationFn: (data: AddGradeData) => addNewGrade(data),
        onSuccess: () => navigate(`/classes/${classID}`),
    });

    return { addGrade };
};
export default useAddGradeMutation;
