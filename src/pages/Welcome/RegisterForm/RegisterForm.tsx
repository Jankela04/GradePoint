import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import styles from "./styles.module.scss";

type Props = {};

const RegisterForm = (props: Props) => {
    const navigate = useNavigate();
    const [name, setName] = useLocalStorage("name", "");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <>
            <h2 className={styles.placeholder}>Please Insert your Name</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                {" "}
                <input
                    type="text"
                    value={name}
                    className={styles.input}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <button className={styles.button} type="submit">
                    Next
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
