import Input from "../../../../../../components/Input";
import styles from "./styles.module.scss";
import {
    useAppDispatch,
    useAppSelector,
} from "../../../../../../hooks/reduxHooks";
import {
    setNewNoteTag,
    setNewNoteTitle,
} from "../../../../../../redux/slices/noteSlice";

const NoteInfo = () => {
    const newNoteInfo = useAppSelector((state) => state.note.new);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.note_info}>
            <Input
                type="text"
                placeholder="Title"
                value={newNoteInfo.title}
                onChange={(e) => dispatch(setNewNoteTitle(e.target.value))}
                className={styles.input}
            />
            <Input
                type="text"
                placeholder="Tag"
                value={newNoteInfo.tag}
                onChange={(e) => dispatch(setNewNoteTag(e.target.value))}
                className={styles.input}
            />
        </div>
    );
};

export default NoteInfo;
