import classNames from "classnames";
import { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useTheme } from "@/context/ThemeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import styles from "./styles.module.scss";

function RegisterForm() {
    const navigate = useNavigate();
    const [name, setName] = useLocalStorage("name", "");
    const { theme } = useTheme();

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
            <form
                className={classNames(styles.form, styles[theme])}
                onSubmit={handleSubmit}
            >
                {" "}
                <Input
                    autoComplete="off"
                    errorText=""
                    id="name"
                    label=""
                    autoFocus
                    type="text"
                    value={name}
                    className={styles.register_input}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    className={styles.button}
                    variant="primary"
                >
                    Next
                </Button>
            </form>
        </>
    );
}

export default RegisterForm;
