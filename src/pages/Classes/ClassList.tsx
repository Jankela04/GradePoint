import ClassCard from "./ClassCard";
import NewClass from "./NewClass";
import styles from "./styles/ClassList.module.scss";
import useClassesQuery from "./api/getClasses";

function ClassList() {
    const { data: classes } = useClassesQuery();

    if (!classes) return null;

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
