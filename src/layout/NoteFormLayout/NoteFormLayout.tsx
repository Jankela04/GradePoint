import { useSearchParams } from "react-router-dom";
import { Note } from "@/types";
import { NoteForm, type TNoteForm } from "@/components/NoteForm";
import { Title } from "@/components/Elements";

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
        <>
            <Title>
                {mode === "new" ? "Create" : "Edit"}
                {" Note"}
            </Title>
            <NoteForm {...noteFormProps} initialValues={initialValues} />
        </>
    );
}

export default NoteFormLayout;
