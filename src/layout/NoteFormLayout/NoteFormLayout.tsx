import { NoteFormProvider, TForm } from "@/context/NoteFormContext";
import { TNote } from "@/components/NoteList/NoteList";
import NoteForm from "@/components/NoteForm/NoteForm";
import styles from "./styles.module.scss";
import Title from "@/components/Title/Title";

export type Mode = "edit" | "new";

type NoteFormLayoutProps =
    | {
        mode: "new";
        note?: null;
    }
    | {
        mode: "edit";
        note: TNote;
    };

function NoteFormLayout({ mode, note }: NoteFormLayoutProps) {
    const getNoteInfo = (note: TNote): TForm => ({ tag: note.tag, text: note.text, title: note.title });

    return (
        <div className={styles.container}>
            <Title>
                {mode === "new" ? "Create" : "Edit"}
                {" "}
                Note
            </Title>
            <NoteFormProvider
                formState={mode === "new" ? null : getNoteInfo(note)}
            >
                <NoteForm mode={mode} note={mode === "new" ? null : note} />
            </NoteFormProvider>
        </div>
    );
}

export default NoteFormLayout;
