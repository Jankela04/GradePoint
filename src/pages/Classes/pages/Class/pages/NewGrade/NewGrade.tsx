import { useLocation, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

import { MainLayout } from "@/layout/MainLayout";
import { Input } from "@/components/Elements";
import { Title } from "@/components/Elements";
import { Button } from "@/components/Elements";
import styles from "./styles.module.scss";
import type { Grade } from "@/types";
import newGradeSchema from "./newGradeSchema";
import useClassQuery from "../../api/getClass";
import useAddGradeMutation from "./api/addGrade";

type NewGradePageParam = {
    id: string;
};

function NewGrade() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<Grade>({
        resolver: zodResolver(newGradeSchema),
        defaultValues: {
            date: new Date(),
        },
    });

    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams() as NewGradePageParam;
    const { data: classObj, isLoading, error } = useClassQuery(id);

    const { addGrade } = useAddGradeMutation(id);

    const handleCancel = () => {
        const path = location.state?.id
            ? `/classes/${location.state?.id}`
            : "/classes";
        navigate(path);
    };

    if (isLoading) return <Title>Loading...</Title>;

    if (error || !classObj) return <Title>Something Went Wrong</Title>;

    const onSubmit = async (data: Grade) => {
        addGrade({ grade: data, classObj });
    };

    return (
        <MainLayout>
            <Title>New Grade</Title>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <section className={styles.section}>
                    <Input
                        center
                        label="Grade: "
                        errorText={errors.grade?.message ?? ""}
                        autoFocus
                        className={styles.input}
                        type="number"
                        id="grade"
                        {...register("grade")}
                    />
                </section>
                <section className={styles.section}>
                    <label htmlFor="date">Date</label>
                    <Controller
                        render={({
                            field: { name, onBlur, onChange, ref, value },
                        }) => (
                            <DatePicker
                                maxDate={new Date()}
                                ref={ref}
                                name={name}
                                id="date"
                                onBlur={onBlur}
                                className={styles.date_picker}
                                dateFormat="dd/MM/yyyy"
                                onChange={onChange}
                                selected={value}
                            />
                        )}
                        name="date"
                        control={control}
                    />
                </section>
                <div className={styles.actions}>
                    <Button
                        variant="neutral"
                        rounded
                        type="button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button variant="secondary" rounded type="submit">
                        New Grade
                    </Button>
                </div>
            </form>
        </MainLayout>
    );
}

export default NewGrade;
