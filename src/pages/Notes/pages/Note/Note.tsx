import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { TNote } from "../../components/NoteList/NoteList";
import NoteActions from "./components/NoteActions/NoteActions";
import { DeleteModalProvider } from "../../../../context/DeleteModalContext";
import Tag from "../../../../components/Tag/Tag";
import { useTheme } from "../../../../context/ThemeContext";
import classNames from "classnames";
import useFetch from "../../../../hooks/useFetch";
import { formatDate } from "../../../../utils/FormatDate";

const Note = () => {
    const { id } = useParams();
    const { theme } = useTheme();
    const { data: note, loading, error } = useFetch<TNote>(`/notes/${id}`);

    if (loading)
        return (
            <div className={styles.alert}>
                <span>Loading...</span>
            </div>
        );

    if (error || !note)
        return (
            <div className={styles.alert}>
                <span>Something Went Wrong</span>
            </div>
        );

    return (
        <>
            <h1 className={styles.title}>{note?.title}</h1>
            <div className={styles.tag}>
                <Tag tag={note?.tag} />
            </div>

            <div className={styles.container}>
                <div className={styles.dates}>
                    <span>Created: {formatDate(note?.created)}</span>
                    <span>Last Edited: {formatDate(note?.edited)}</span>
                </div>
                <div className={classNames(styles.text, styles[theme])}>
                    {note?.text}
                </div>
                <DeleteModalProvider>
                    <NoteActions />
                </DeleteModalProvider>
            </div>
        </>
    );
};
export default Note;
