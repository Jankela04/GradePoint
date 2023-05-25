import { useParams } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Note as TNote } from "@/types";
import NoteActions from "./components/NoteActions/NoteActions";
import { Tag } from "@/components/Elements";
import { useTheme } from "@/context/ThemeContext";
import useFetch from "@/hooks/useFetch";
import { formatDate } from "@/utils/FormatDate";
import { Title } from "@/components/Elements";
import { MainLayout } from "@/layout/MainLayout";

function Note() {
    const { id } = useParams();
    const { theme } = useTheme();
    const { data: note, loading, error } = useFetch<TNote>(`/notes/${id}`);

    if (loading) {
        return (
            <div className={styles.alert}>
                <span>Loading...</span>
            </div>
        );
    }

    if (error || !note) {
        return (
            <div className={styles.alert}>
                <span>Something Went Wrong</span>
            </div>
        );
    }

    return (
        <MainLayout>
            <Title>{note?.title}</Title>
            <div className={styles.tag}>
                <Tag tag={note?.tag} />
            </div>

            <div className={styles.container}>
                <div className={styles.dates}>
                    <span>
                        Created:
                        {formatDate(note?.created)}
                    </span>
                    <span>
                        Last Edited:
                        {formatDate(note?.edited)}
                    </span>
                </div>
                <div className={classNames(styles.text, styles[theme])}>
                    {note?.text}
                </div>
                <NoteActions />
            </div>
        </MainLayout>
    );
}
export default Note;
