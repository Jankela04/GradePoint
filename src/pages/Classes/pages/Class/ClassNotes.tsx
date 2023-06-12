import { useNavigate, createSearchParams } from "react-router-dom";
import { Button, InlineSpinner } from "@/components/Elements";
import { NoteList } from "@/components/NoteList";
import { Class } from "@/types";
import styles from "./styles/ClassNotes.module.scss";
import { Suspense } from "react";

function ClassNotes({ classObj }: { classObj: Class }) {
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
            <Suspense fallback={<InlineSpinner />}>
                <NoteList tag={classObj.class} />
            </Suspense>
        </>
    );
}

export default ClassNotes;
