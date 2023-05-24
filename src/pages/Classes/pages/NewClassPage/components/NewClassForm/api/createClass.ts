import axiosService from "@/services/axios";
import { Grade } from "@/types";

type NewClass = {
    grades: Grade[];
    class: string;
    teacher: string;
    id: string;
};

const createClass = async (newClass: NewClass) => {
    await axiosService.post("/classes", newClass);
};

export default createClass;
