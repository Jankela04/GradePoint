import Input from "../../../../../../components/Input";
import styles from "./styles.module.scss";
import { updateFilter } from "../../../../../../redux/slices/noteFilterSlice";
import {
    useAppDispatch,
    useAppSelector,
} from "../../../../../../hooks/reduxHooks";

const NoteFilter = () => {
    const query = useAppSelector((state) => state.noteFilter);
    const dispatch = useAppDispatch();

    return (
        <Input
            type="text"
            value={query}
            placeholder="Search Notes"
            onChange={(e) => {
                dispatch(updateFilter(e.target.value));
            }}
            className={styles.input}
        />
    );
};

export default NoteFilter;
