import useFetch from "../../../hooks/useFetch";
import ClassCard from "./components/ClassCard/ClassCard";
import NewClass from "./components/NewClass/NewClass";
import styles from "./styles.module.scss";

export type Grade = {
    grade: number;
    date: string;
};

export type Class = {
    id: string;
    class: string;
    teacher: string;
    grades: Grade[];
};

const ClassList = () => {
    const { data: classes, loading, error } = useFetch<Class[]>("/classes");

    if (loading)
        return (
            <div className={styles.alert_container}>
                <p>Loading...</p>
            </div>
        );

    if (error) return <div>Error, Something Went Wrong</div>;

    return (
        <div className={styles.class_container}>
            {classes?.map((classObj) => (
                <ClassCard classObj={classObj} key={classObj.id} />
            ))}
            <NewClass />
        </div>
    );
};

export default ClassList;
