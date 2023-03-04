import Title from "../../../components/Title/Title";
import useFetch from "../../../hooks/useFetch";
import ClassCard from "./components/ClassCard/ClassCard";
import NewClass from "./components/NewClass/NewClass";
import styles from "./styles.module.scss";

export type Grade = {
    grade: number;
    date: Date;
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
            <Title>
                <p>Loading...</p>
            </Title>
        );

    if (error) return <Title>Error, Something Went Wrong</Title>;

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
