import classNames from "classnames";
import { InputHTMLAttributes, forwardRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import styles from "./styles.module.scss";

type InputProps = {
    center?: boolean;
    label: string;
    errorText: string;
    autoFocus?: boolean;
    type: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    id: string;
} & InputHTMLAttributes<HTMLInputElement>;

const DANGER_COLOR = "#d10000";

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            autoFocus = false,
            disabled = false,
            type,
            name = "",
            placeholder = "",
            className = "",
            id = "",
            label = "",
            errorText = "",
            center = false,
            ...rest
        },
        ref
    ) => {
        const { theme } = useTheme();

        const isError = errorText !== "";

        const inputClass = classNames(styles.input, styles[theme], className);

        return (
            <div
                className={styles.input_wrapper}
                style={{ alignItems: center ? "center" : "" }}
            >
                {label !== "" && <label htmlFor={id}>{label}</label>}
                <input
                    style={{
                        outline: isError ? `2px solid ${DANGER_COLOR}` : "",
                    }}
                    autoFocus={autoFocus}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={inputClass}
                    id={id}
                    disabled={disabled}
                    ref={ref}
                    {...rest}
                />
                {isError && <span>{errorText}</span>}
            </div>
        );
    }
);
export default Input;
