import { createContext, Dispatch, SetStateAction } from "react";

export type TNoteFilter = {
    query: string;
    tag: string;
};

type FilterContextProps = {
    filter: TNoteFilter;
    setFilter: Dispatch<SetStateAction<TNoteFilter>>;
};

export const initialFilterState: TNoteFilter = {
    query: "",
    tag: "",
};

const NoteFilterContext = createContext<FilterContextProps>({
    filter: initialFilterState,
    setFilter: () => {},
});

export default NoteFilterContext;
