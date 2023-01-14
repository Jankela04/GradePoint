import Navbar from "../../components/Navbar/Navbar";
import useLocalStorage from "../../hooks/useLocalStorage";
import { NoteList } from "../../redux/slices/notesSlice";

type Props = {};

const Notes = (props: Props) => {
    const [notes, setNotes] = useLocalStorage<NoteList>("notes", []);
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default Notes;
