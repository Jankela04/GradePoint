import styles from "./styles.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { TNote } from "../../components/NoteList/NoteList";
import NoteActions from "./components/NoteActions/NoteActions";
import { DeleteModalProvider } from "../../../../context/DeleteModalContext";
import Tag from "../../../../components/Tag/Tag";
import { useTheme } from "../../../../context/ThemeContext";
import classNames from "classnames";

const Note = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [noteInfo, setNoteInfo] = useState<TNote>();
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

    const getNote = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:3000/notes/${id}`);
            setNoteInfo(res.data);
        } catch (err: any) {
            console.error(err);
            if (err.request.status === 404) {
                navigate("/404");
            }
        }
        setLoading(false);
    };
    useEffect(() => {
        getNote();
    }, []);

    return (
        <>
            {loading ? (
                <div className={styles.loading}>
                    <span>Loading...</span>
                </div>
            ) : (
                <>
                    <h1 className={styles.title}>{noteInfo?.title}</h1>
                    <div className={styles.tag}>
                        <Tag tag={noteInfo?.tag} />
                    </div>

                    <div className={styles.container}>
                        <div className={classNames(styles.text, styles[theme])}>
                            {noteInfo?.text}
                        </div>
                        <DeleteModalProvider>
                            <NoteActions />
                        </DeleteModalProvider>
                    </div>
                </>
            )}
        </>
    );
};

export default Note;
