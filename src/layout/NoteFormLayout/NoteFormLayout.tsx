import { NoteFormProvider, TForm } from "../../context/NoteFormContext";
import { TNote } from "../../pages/Notes/components/NoteList/NoteList";
import NoteForm from "../../pages/Notes/pages/NewNote/components/NoteForm/NoteForm";
import styles from "./styles.module.scss";

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

const NoteFormLayout = ({ mode, note }: NoteFormLayoutProps) => {
    const getNoteInfo = (note: TNote): TForm => {
        return { tag: note.tag, text: note.text, title: note.title };
    };

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {mode === "new" ? "Create" : "Edit"} Note
                </h1>
                <NoteFormProvider
                    formState={mode === "new" ? null : getNoteInfo(note)}
                >
                    <NoteForm mode={mode} note={mode === "new" ? null : note} />
                </NoteFormProvider>
            </div>
        </>
    );
};

export default NoteFormLayout;
