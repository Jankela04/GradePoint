import Title from "@/components/Title/Title";
import useFetch from "@/hooks/useFetch";
import ClassCard from "./components/ClassCard/ClassCard";
import NewClass from "./components/NewClass/NewClass";
import styles from "./styles.module.scss";
import { Class } from "@/types";

function ClassList() {
    const { data: classes, loading, error } = useFetch<Class[]>("/classes");

    if (loading) {
        return (
            <Title>
                <p>Loading...</p>
            </Title>
        );
    }

    if (error) return <Title>Error, Something Went Wrong</Title>;

    return (
        <div className={styles.class_container}>
            {classes?.map((classObj) => (
                <ClassCard classObj={classObj} key={classObj.id} />
            ))}
            <NewClass />
        </div>
    );
}

export default ClassList;
