import { useNoteFilter } from "../../../../../../context/NoteFilterContext";
import Input from "../../../../../../components/Input/Input";

const NoteFilter = () => {
    const { filter, setFilter } = useNoteFilter();

    return (
        <Input
            type="text"
            value={filter.query}
            placeholder="Search Notes"
            onChange={(e) => {
                setFilter(() => {
                    return { ...filter, query: e.target.value };
                });
            }}
        />
    );
};

export default NoteFilter;
