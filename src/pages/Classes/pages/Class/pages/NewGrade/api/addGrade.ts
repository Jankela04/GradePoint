import axios from "@/lib/axios";
import { Class, Grade } from "@/types";

const addGrade = async (data: Grade, classObj: Class) => {
    const newClass: Class = {
        ...classObj,
        grades: [...classObj.grades, data],
    };
    await axios.put(`/classes/${classObj?.id}`, newClass);
};

export default addGrade;
