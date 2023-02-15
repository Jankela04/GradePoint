import {
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
    useState,
    useContext,
} from "react";

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

const NoteFilterProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<TNoteFilter>(initialFilterState);
    return (
        <NoteFilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </NoteFilterContext.Provider>
    );
};
const useNoteFilter = () => {
    const { filter, setFilter } = useContext(NoteFilterContext);
    return { filter, setFilter };
};

export { NoteFilterProvider, useNoteFilter };

export default NoteFilterContext;
