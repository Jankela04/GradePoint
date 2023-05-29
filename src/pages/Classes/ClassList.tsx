import { Title } from "@/components/Elements";
import useFetch from "@/hooks/useFetch";
import ClassCard from "./ClassCard";
import NewClass from "./NewClass";
import styles from "./styles/ClassList.module.scss";
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
