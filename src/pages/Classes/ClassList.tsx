import { Title } from "@/components/Elements";
import ClassCard from "./ClassCard";
import NewClass from "./NewClass";
import styles from "./styles/ClassList.module.scss";
import useClassesQuery from "./api/getClasses";

function ClassList() {
    const { data: classes, isLoading, error } = useClassesQuery();

    if (isLoading) {
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
