import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Note } from "@/types";
import styles from "./styles.module.scss";
import { Tag } from "@/components/Elements";
import { shortFormatDate } from "@/utils/FormatDate";

function NoteCard({ note }: { note: Note }) {
    const navigate = useNavigate();
    const location = useLocation();

    const { theme } = useTheme();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            navigate(`/notes/${note.id}`, {
                state: { prevPath: location.pathname },
            });
        }
    };

    return (
        <div
            role="button"
            tabIndex={0}
            className={classNames(styles.card, styles[theme])}
            onKeyDown={handleKeyDown}
        >
            <Link
                to={`/notes/${note.id}`}
                state={{ prevPath: location.pathname }}
            >
                <h3 className={styles.title}>{note.title}</h3>
                <div className={classNames(styles.info)}>
                    <Tag tag={note.tag} />
                    <div className={styles.dates}>
                        <span
                            className={classNames(styles.date, styles[theme])}
                        >
                            {`Created: ${shortFormatDate(note.created)}`}
                        </span>
                        <span
                            className={classNames(styles.date, styles[theme])}
                        >
                            {`Edited: ${shortFormatDate(note.edited)}`}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NoteCard;
