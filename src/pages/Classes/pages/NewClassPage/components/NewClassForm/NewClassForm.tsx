import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import axiosService from "@/services/axios";
import styles from "./styles.module.scss";

type ClassForm = {
    class: string;
    teacher: string;
};

const initialFormState: ClassForm = {
    class: "",
    teacher: "",
};

function NewClassForm() {
    const [form, setForm] = useState<ClassForm>(initialFormState);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.class === "" || form.teacher === "") {
            alert("Please Fill all inputs");
        } else {
            const newClass = { id: v4(), ...form, grades: [] };
            await axiosService.post("/classes", newClass);
            navigate(`/classes/${newClass.id}`);
        }
    };
    const handleCancelClick = () => {
        setForm(initialFormState);
        navigate("/classes");
    };
    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.section}>
                <Input
                    id="Class"
                    label="Class Name:"
                    value={form.class}
                    type="text"
                    onChange={(e) =>
                        setForm((prev) => ({ ...prev, class: e.target.value }))
                    }
                    placeholder="Enter Class Name"
                />
            </div>
            <div className={styles.section}>
                <label htmlFor="class">Teacher</label>
                <Input
                    value={form.teacher}
                    type="text"
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            teacher: e.target.value,
                        }))
                    }
                    placeholder="Enter Teacher's Name"
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
