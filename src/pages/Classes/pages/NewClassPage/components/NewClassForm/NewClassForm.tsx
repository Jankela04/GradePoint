import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import Button from "../../../../../../components/Button/Button";
import Input from "../../../../../../components/Input/Input";
import axiosService from "../../../../../../services/axios";
import styles from "./styles.module.scss";

type ClassForm = {
    class: string;
    teacher: string;
};

const NewClassForm = () => {
    const [form, setForm] = useState<ClassForm>({
        class: "",
        teacher: "",
    });
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
    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.section}>
                <label htmlFor="class">Class Name</label>
                <Input
                    value={form.class}
                    type="text"
                    onChange={(e) =>
                        setForm((prev) => {
                            return { ...prev, class: e.target.value };
                        })
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
                        setForm((prev) => {
                            return { ...prev, teacher: e.target.value };
                        })
                    }
                    placeholder="Enter Teacher's Name"
                />
            </div>
            <Button variant="primary" rounded type="submit">
                Create Class
            </Button>
        </form>
    );
};

export default NewClassForm;
