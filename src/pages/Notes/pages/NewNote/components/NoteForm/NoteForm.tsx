import NoteActions from "./components/NoteActions/NoteActions";
import NoteInfo from "./components/NoteInfo/NoteInfo";
import NoteText from "./components/NoteText/NoteText";

const NoteForm = () => {
    return (
        <form>
            <NoteInfo />
            <NoteText />
            <NoteActions />
        </form>
    );
};

export default NoteForm;
