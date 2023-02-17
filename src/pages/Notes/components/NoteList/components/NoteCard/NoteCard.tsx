import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../../../context/ThemeContext";
import { TNote } from "../../NoteList";
import styles from "./styles.module.scss";
import formatDate from "../../../../../../utils/FormatDate";

const NoteCard = ({ note }: { note: TNote }) => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const date = new Date();
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    return (
        <div
            className={classNames(styles.card, styles[theme])}
            onClick={() => navigate(`/notes/${note.id}`)}
        >
            <h3 className={styles.title}>{note.title}</h3>
            <div className={classNames(styles.info)}>
                <span className={classNames(styles.tag, styles[theme])}>
                    {note.tag}
                </span>
                <span className={classNames(styles.date, styles[theme])}>
                    {formatDate(new Date())}
                </span>
            </div>
        </div>
    );
};

export default NoteCard;
