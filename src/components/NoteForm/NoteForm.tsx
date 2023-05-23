import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";

import { NoteFormType } from "@/layout/NoteFormLayout/NoteFormLayout";
import noteFormSchema, { NoteForm as TNoteForm } from "./noteFormSchema";

import styles from "./styles.module.scss";
import { useTheme } from "@/context/ThemeContext";

import Button from "../Button/Button";
import Input from "../Input/Input";

import createNewNote from "./api/createNote";
import editNote from "./api/editNote";

type NoteFormProps = NoteFormType & {
    initialValues: TNoteForm;
};

function NoteForm({ mode, note, initialValues }: NoteFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TNoteForm>({
        resolver: zodResolver(noteFormSchema),
        defaultValues: initialValues,
    });

    const { theme } = useTheme();

    const navigate = useNavigate();
    const location = useLocation();

    const handleCancel = () => {
        if (location.state?.fromClass) {
            navigate(`/classes/${location.state.fromClass}`);
        } else {
            navigate("/notes");
        }
    };

    const onSubmit = async (data: TNoteForm) => {
        if (mode === "new") {
            createNewNote(data);
        } else {
            editNote(note, data);
        }
        navigate("/notes");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.note_info}>
                <Input
                    id="title"
                    label="Title"
                    errorText={errors.title?.message ?? ""}
                    type="text"
                    placeholder="e.g. Pythagorean theorem"
                    className={styles.input}
                    {...register("title")}
                />
                <Input
                    id="tag"
                    label="Tag"
                    errorText={errors.tag?.message ?? ""}
                    type="text"
                    placeholder="e.g. Math"
                    className={styles.input}
                    {...register("tag")}
                />
            </div>
            <textarea
                className={classNames(styles.textarea, styles[theme])}
                placeholder="Your note... e.g. a^2 + b^2 = c^2"
                {...register("text")}
            />
            <div className={styles.actions}>
                <Button
                    type="button"
                    variant="neutral"
                    rounded
                    onClick={handleCancel}
                >
                    Cancel
                </Button>
                <Button type="submit" variant="primary" rounded>
                    {mode === "new" ? "Create" : "Edit"} Note
                </Button>
            </div>
        </form>
    );
}

export default NoteForm;
