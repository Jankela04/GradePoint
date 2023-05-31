import { Title } from "@/components/Elements";
import { NoteFilterProvider } from "@/context/NoteFilterContext";
import NoteControls from "./NoteControls";
import { NoteList } from "@/components/NoteList";
import styles from "./styles/Notes.module.scss";
import { MainLayout } from "@/layout/MainLayout";
import useNotesQuery from "./api/getNotes";

function Notes() {
    const { data: notes, error, isLoading } = useNotesQuery();

    if (isLoading) {
        return (
            <div className={styles.alert_container}>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) return <div>Error, Something Went Wrong</div>;

    if (notes) {
        return (
            <MainLayout>
                <div className={styles.container}>
                    <Title>Notes</Title>
                    <NoteFilterProvider>
                        <NoteControls />
                        <NoteList notes={notes} />
                    </NoteFilterProvider>
                </div>
            </MainLayout>
        );
    }
}

export default Notes;
