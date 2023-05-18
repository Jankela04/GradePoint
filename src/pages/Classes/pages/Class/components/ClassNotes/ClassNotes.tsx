import { useNavigate, createSearchParams } from "react-router-dom";
import Button from "@/components/Button/Button";
import NoteList, { TNote } from "@/components/NoteList/NoteList";
import { Class } from "../../../../ClassList/ClassList";
import styles from "./styles.module.scss";

function ClassNotes({
    classObj,
    notes,
}: {
    classObj: Class;
    notes: TNote[];
}) {
    const navigate = useNavigate();
    const handleCreateNote = () => {
        navigate(
            {
                pathname: "/notes/new",
                search: createSearchParams({
                    tag: classObj.class,
                }).toString(),
            },
            {
                state: { fromClass: classObj.id },
            }
        );
    };
    return (
        <>
            <div className={styles.notes}>
                <span>Notes:</span>
                <Button variant="primary" rounded onClick={handleCreateNote}>
                    Create Note
                </Button>
            </div>
            <NoteList notes={notes} />
        </>
    );
}

export default ClassNotes;
