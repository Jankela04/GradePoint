import { createContext, Dispatch, SetStateAction } from "react";

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

export default NewNoteFormContext;
