import { useParams } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles/Note.module.scss";
import NoteActions from "./NoteActions";
import { Tag } from "@/components/Elements";
import { useTheme } from "@/context/ThemeContext";
import { formatDate } from "@/utils/FormatDate";
import { Title } from "@/components/Elements";
import { MainLayout } from "@/layout/MainLayout";
import useNoteQuery from "./api/getNote";

export type NotePageParams = {
    id: string;
};

function Note() {
    const { id } = useParams() as NotePageParams;
    const { theme } = useTheme();
    const { data: note, isLoading, error } = useNoteQuery(id);

    if (isLoading) {
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
