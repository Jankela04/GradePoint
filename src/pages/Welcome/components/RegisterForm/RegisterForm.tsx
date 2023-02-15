import { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import styles from "./styles.module.scss";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useLocalStorage("name", "");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/home");
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <>
            <h2 className={styles.placeholder}>Please Insert your Name</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                {" "}
                <Input
                    type="text"
                    value={name}
                    className={styles.input}
                    placeholder={"Name"}
                    onChange={handleChange}
                />
                <Button
                    label={"Next"}
                    className={styles.button}
                    type="submit"
                />
            </form>
        </>
    );
};

export default RegisterForm;
