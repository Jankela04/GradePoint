import Title from "@/components/Title/Title";
import { NoteFilterProvider } from "@/context/NoteFilterContext";
import useFetch from "@/hooks/useFetch";
import NoteControls from "./components/NoteControls/NoteControls";
import NoteList, { TNote } from "@/components/NoteList/NoteList";
import styles from "./styles.module.scss";

function Notes() {
    const { data: notes, loading, error } = useFetch<TNote[]>("/notes");

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
            <div className={styles.container}>
                <Title>Notes</Title>
                <NoteFilterProvider>
                    <NoteControls />
                    <NoteList notes={notes} />
                </NoteFilterProvider>
            </div>
        );
    }
}

export default Notes;
