import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../../../context/ThemeContext";
import { TNote } from "../../NoteList";
import styles from "./styles.module.scss";
import Tag from "../../../../../../components/Tag/Tag";
import { shortFormatDate } from "../../../../../../utils/FormatDate";

const NoteCard = ({ note }: { note: TNote }) => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    return (
        <div
            className={classNames(styles.card, styles[theme])}
            onClick={() => navigate(`/notes/${note.id}`)}
        >
            <h3 className={styles.title}>{note.title}</h3>
            <div className={classNames(styles.info)}>
                <Tag tag={note.tag} />
                <div className={styles.dates}>
                    <span className={classNames(styles.date, styles[theme])}>
                        Created: {shortFormatDate(note.created)}
                    </span>
                    <span className={classNames(styles.date, styles[theme])}>
                        Edited: {shortFormatDate(note.edited)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
