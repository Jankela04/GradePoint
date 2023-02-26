import { Class } from "../pages/Classes/ClassList/ClassList";

const CalculateGpa = (classobj: Class) => {
    const grades = classobj.grades.map((grade) => grade.grade);
    const gradeSum = grades.reduce((prev, acc) => prev + acc, 0);

    return (gradeSum / grades.length).toFixed(2);
};

export default CalculateGpa;
