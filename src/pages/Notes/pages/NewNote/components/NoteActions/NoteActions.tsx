import Button from "../../../../../../components/Button";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import axios from "axios";
import { TNote } from "../../../../components/NoteList/NoteList";
import {
    useAppSelector,
    useAppDispatch,
} from "../../../../../../hooks/reduxHooks";
import { v4 as uuidv4 } from "uuid";
import { clearNewNoteInfo } from "../../../../../../redux/slices/noteSlice";

const NoteActions = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const newNoteInfo = useAppSelector((state) => state.note.new);

    const handleCreateNote = async (
        e: MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (newNoteInfo.title && newNoteInfo.tag && newNoteInfo.text) {
            const newNote: TNote = {
                id: uuidv4(),
                title: newNoteInfo.title,
                tag: newNoteInfo.tag,
                note: newNoteInfo.text,
            };
            await axios.post("http://localhost:3000/notes", newNote);
            dispatch(clearNewNoteInfo());
            navigate("/notes");
        } else {
            alert("Please fill all inputs.");
        }
    };

    return (
        <div className={styles.actions}>
            <Button
                type="submit"
                className={styles.button_primary}
                label="Create Note"
                onClick={(e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    handleCreateNote(e);
                }}
            />
            <Button
                type="button"
                className={styles.button_secondary}
                label="Cancel"
                onClick={() => {
                    navigate("/notes");
                }}
            />
        </div>
    );
};

export default NoteActions;
