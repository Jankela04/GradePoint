import { Title } from "@/components/Elements";
import { NoteFilterProvider } from "@/context/NoteFilterContext";
import useFetch from "@/hooks/useFetch";
import NoteControls from "./components/NoteControls/NoteControls";
import { NoteList } from "@/components/NoteList";
import { Note } from "@/types";
import styles from "./styles.module.scss";
import { MainLayout } from "@/layout/MainLayout";

function Notes() {
    const { data: notes, loading, error } = useFetch<Note[]>("/notes");

    if (loading) {
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
