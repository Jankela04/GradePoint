import {
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
    useState,
    useContext,
    useMemo,
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

function NoteFilterProvider({ children }: { children: ReactNode }) {
    const [filter, setFilter] = useState<TNoteFilter>(initialFilterState);
    const contextValue = useMemo(
        () => ({ filter, setFilter }),
        [filter, setFilter]
    );
    return (
        <NoteFilterContext.Provider value={contextValue}>
            {children}
        </NoteFilterContext.Provider>
    );
}
const useNoteFilter = () => {
    const { filter, setFilter } = useContext(NoteFilterContext);
    return { filter, setFilter };
};

export { NoteFilterProvider, useNoteFilter };

export default NoteFilterContext;
