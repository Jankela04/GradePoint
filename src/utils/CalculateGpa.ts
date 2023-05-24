import type { Class } from "@/types";

const CalculateGpa = (classobj: Class) => {
    const grades = classobj.grades.map((grade) => grade.grade);
    if (grades.length === 0) {
        return "";
    }

    const gradeSum = grades.reduce((prev, acc) => prev + acc, 0);

    return (gradeSum / grades.length).toFixed(2);
};

export default CalculateGpa;
