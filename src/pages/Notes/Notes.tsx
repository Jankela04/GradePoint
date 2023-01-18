import Navbar from "../../components/Navbar/Navbar";
import useLocalStorage from "../../hooks/useLocalStorage";
import { NoteList } from "../../redux/slices/notesSlice";

const Notes = () => {
    const [notes, setNotes] = useLocalStorage<NoteList>("notes", []);
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default Notes;
