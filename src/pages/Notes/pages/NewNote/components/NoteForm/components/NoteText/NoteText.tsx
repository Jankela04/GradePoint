import styles from "./styles.module.scss";
import {
    useAppSelector,
    useAppDispatch,
} from "../../../../../../../../hooks/reduxHooks";
import { setNewNoteText } from "../../../../../../../../redux/slices/noteSlice";

const NoteText = () => {
    const dispatch = useAppDispatch();
    const noteText = useAppSelector((state) => state.note.new.text);
    return (
        <textarea
            value={noteText}
            onChange={(e) => dispatch(setNewNoteText(e.target.value))}
            className={styles.textarea}
            placeholder="Your note..."
        ></textarea>
    );
};

export default NoteText;
