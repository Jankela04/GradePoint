import { useSearchParams } from "react-router-dom";
import { NoteForm as TNoteForm } from "@/components/NoteForm/noteFormSchema";
import { Note } from "@/types";
import NoteForm from "@/components/NoteForm/NoteForm";
import styles from "./styles.module.scss";
import Title from "@/components/Title/Title";

// prettier-ignore
export type NoteFormType =
    | {
        mode: "new";
        note?: null;
    }
    | {
        mode: "edit";
        note: Note;
    };

function NoteFormLayout(noteFormProps: NoteFormType) {
    const { mode, note } = noteFormProps;
    const [searchParams] = useSearchParams();
    const searchParamTag = searchParams.get("tag") || "";

    const getNoteInfo = (note: Note): TNoteForm => ({
        tag: note.tag,
        text: note.text,
        title: note.title,
    });

    const initialValues: TNoteForm =
        mode === "new"
            ? { title: "", tag: searchParamTag, text: "" }
            : getNoteInfo(note);

    return (
        <div className={styles.container}>
            <Title>
                {mode === "new" ? "Create" : "Edit"}
                {" Note"}
            </Title>
            <NoteForm {...noteFormProps} initialValues={initialValues} />
        </div>
    );
}

export default NoteFormLayout;
