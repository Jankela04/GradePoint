import axios from "@/lib/axios";
import { Grade } from "@/types";

type NewClass = {
    grades: Grade[];
    class: string;
    teacher: string;
    id: string;
};

const createClass = async (newClass: NewClass) => {
    await axios.post("/classes", newClass);
};

export default createClass;
