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

const NoteFormContext = createContext<FormContextProps>({
    form: initialFormState,
    setForm: () => {},
});

const NoteFormProvider = ({
    children,
    formState,
}: {
    children: ReactNode;
    formState?: TForm | null;
}) => {
    const [form, setForm] = useState<TForm>(
        formState ?? {
            title: "",
            tag: "",
            text: "",
        }
    );

    return (
        <NoteFormContext.Provider value={{ form, setForm }}>
            {children}
        </NoteFormContext.Provider>
    );
};
const useNoteForm = () => {
    const { form, setForm } = useContext(NoteFormContext);
    return { form, setForm };
};

export { NoteFormProvider, useNoteForm };

export default NoteFormContext;