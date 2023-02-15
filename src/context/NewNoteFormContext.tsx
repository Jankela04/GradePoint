import {
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
    useState,
    useContext,
} from "react";

export type TForm = {
    title: string;
    tag: string;
    text: string;
};

type FormContextProps = {
    form: TForm;
    setForm: Dispatch<SetStateAction<TForm>>;
};
export const initialFormState: TForm = {
    title: "",
    tag: "",
    text: "",
};

const NewNoteFormContext = createContext<FormContextProps>({
    form: initialFormState,
    setForm: () => {},
});

const NewNoteFormProvider = ({ children }: { children: ReactNode }) => {
    const [form, setForm] = useState<TForm>(initialFormState);

    return (
        <NewNoteFormContext.Provider value={{ form, setForm }}>
            {children}
        </NewNoteFormContext.Provider>
    );
};
const useNewNoteForm = () => {
    const { form, setForm } = useContext(NewNoteFormContext);
    return { form, setForm };
};

export { NewNoteFormProvider, useNewNoteForm };

export default NewNoteFormContext;
