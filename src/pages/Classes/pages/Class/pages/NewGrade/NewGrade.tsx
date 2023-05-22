import { useLocation, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/Input/Input";
import Title from "@/components/Title/Title";
import styles from "./styles.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/components/Button/Button";
import useFetch from "@/hooks/useFetch";
import type { Class, Grade } from "@/types";
import axiosService from "@/services/axios";
import newGradeSchema from "./newGradeSchema";

function NewGrade() {
    const { register, handleSubmit, control } = useForm<Grade>({
        resolver: zodResolver(newGradeSchema),
        defaultValues: {
            date: new Date(),
        },
    });
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const {
        data: classObj,
        loading,
        error,
    } = useFetch<Class>(`/classes/${id}`);

    const handleCancel = () => {
        const path = location.state?.id
            ? `/classes/${location.state?.id}`
            : "/classes";
        navigate(path);
    };
    const onSubmit = async (data: Grade) => {
        const { grade, date } = data;
        try {
            const newGrade: Grade = {
                grade,
                date,
            };
            if (classObj) {
                const newClass: Class = {
                    ...classObj,
                    grades: [...classObj.grades, newGrade],
                };
                await axiosService.put(`/classes/${classObj?.id}`, newClass);
                navigate(`/classes/${classObj?.id}`);
            }
        } catch (err: any) {
            alert(err.message);
        }
    };
    if (loading) return <Title>Loading...</Title>;

    if (error || !classObj) return <Title>Something Went Wrong</Title>;

    return (
        <>
            <Title>New Grade</Title>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <section className={styles.section}>
                    <label htmlFor="grade">Grade</label>
                    <Input
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
        </>
    );
}

export default NewGrade;
