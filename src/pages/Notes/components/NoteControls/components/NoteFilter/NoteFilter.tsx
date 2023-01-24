import Input from "../../../../../../components/Input";
import styles from "./styles.module.scss";
import { setFilterQuery } from "../../../../../../redux/slices/noteSlice";

import {
    useAppDispatch,
    useAppSelector,
} from "../../../../../../hooks/reduxHooks";

const NoteFilter = () => {
    const filter = useAppSelector((state) => state.note.filter);
    const dispatch = useAppDispatch();

    return (
        <Input
            type="text"
            value={filter.query}
            placeholder="Search Notes"
            onChange={(e) => {
                dispatch(setFilterQuery(e.target.value));
            }}
            className={styles.input}
        />
    );
};

export default NoteFilter;
