import classNames from "classnames";
import { InputHTMLAttributes, forwardRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import styles from "./styles.module.scss";

type InputProps = {
    autoFocus?: boolean;
    type: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

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
            ...rest
        },
        ref
    ) => {
        const { theme } = useTheme();

        const inputClass = classNames(styles.input, styles[theme], className);
        return (
            <input
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
        );
    }
);
export default Input;
