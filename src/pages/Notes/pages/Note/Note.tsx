import { useParams } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles/Note.module.scss";
import NoteActions from "./NoteActions";
import { Head, Tag } from "@/components/Elements";
import { useTheme } from "@/context/ThemeContext";
import { formatDate } from "@/utils/FormatDate";
import { Title } from "@/components/Elements";
import useNoteQuery from "./api/getNote";

export type NotePageParams = {
    id: string;
};

function Note() {
    const { id } = useParams() as NotePageParams;
    const { theme } = useTheme();
    const { data: note } = useNoteQuery(id);

    if (!note) return null;

    return (
        <>
            <Head title={note.title} />
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
                <NoteActions noteId={id} />
            </div>
        </>
    );
}
export default Note;
