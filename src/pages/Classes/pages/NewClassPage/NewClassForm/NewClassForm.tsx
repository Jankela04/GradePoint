import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { Button } from "@/components/Elements";
import { Input } from "@/components/Elements";
import styles from "./NewClassForm.module.scss";
import {
    NewClassForm as TNewClassForm,
    newClassSchema,
} from "./newClassSchema";
import createClass from "./api/createClass";

function NewClassForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TNewClassForm>({
        resolver: zodResolver(newClassSchema),
    });
    const navigate = useNavigate();

    const onSubmit = async (data: TNewClassForm) => {
        const newClass = { id: v4(), ...data, grades: [] };
        createClass(newClass);
        navigate(`/classes/${newClass.id}`);
    };
    const handleCancelClick = () => {
        reset();
        navigate("/classes");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.section}>
                <Input
                    id="Class"
                    label="Class Name:"
                    type="text"
                    errorText={errors.class?.message ?? ""}
                    placeholder="e.g. Chemistry"
                    {...register("class")}
                />
            </div>
            <div className={styles.section}>
                <Input
                    id="Teacher"
                    label="Teacher's Name:"
                    type="text"
                    errorText={errors.teacher?.message ?? ""}
                    placeholder="e.g. Walter White"
                    {...register("teacher")}
                />
            </div>
            <div className={styles.actions}>
                <Button variant="primary" rounded type="submit">
                    Create Class
                </Button>
                <Button
                    variant="neutral"
                    rounded
                    type="button"
                    onClick={handleCancelClick}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default NewClassForm;
