/* eslint-disable react/jsx-props-no-spreading */
import { NoteFormProvider } from "@/context/NoteFormContext";
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
    const getNoteInfo = (note: Note): TNoteForm => ({
        tag: note.tag,
        text: note.text,
        title: note.title,
    });

    return (
        <div className={styles.container}>
            <Title>
                {mode === "new" ? "Create" : "Edit"}
                {" Note"}
            </Title>
            <NoteFormProvider
                formState={mode === "new" ? null : getNoteInfo(note)}
            >
                <NoteForm {...noteFormProps} />
            </NoteFormProvider>
        </div>
    );
}

export default NoteFormLayout;
