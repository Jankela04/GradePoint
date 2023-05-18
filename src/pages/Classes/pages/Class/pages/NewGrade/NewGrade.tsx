import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import Input from "@/components/Input/Input";
import Title from "@/components/Title/Title";
import styles from "./styles.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/components/Button/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import convertNumber from "@/utils/ConvertToNumber";
import useFetch from "@/hooks/useFetch";
import { Class, Grade } from "../../../../ClassList/ClassList";
import axiosService from "@/services/axios";

function NewGrade() {
    const [grade, setGrade] = useState<string>("");
    const [date, setDate] = useState(new Date());
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
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const gradeNum = convertNumber(grade);
            const newGrade: Grade = {
                grade: gradeNum,
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
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <section className={styles.section}>
                    <label htmlFor="grade">Grade</label>
                    <Input
                        autoFocus
                        className={styles.input}
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        type="text"
                        id="grade"
                    />
                </section>
                <section className={styles.section}>
                    <label>Date</label>
                    <DatePicker
                        className={styles.date_picker}
                        selected={date}
                        onChange={(date: Date) => setDate(date)}
                        dateFormat="dd/MM/yyyy"
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
