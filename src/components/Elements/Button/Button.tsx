/* eslint-disable react/button-has-type */

import { ReactNode, forwardRef } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useTheme } from "@/context/ThemeContext";

type ButtonProps = {
    variant: "primary" | "secondary" | "danger" | "neutral";
    children: ReactNode;
    rounded: boolean;
    onClick: () => void;
    disabled: boolean;
    type: "button" | "submit";
    className: string;
};

const Button = forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
    (
        {
            variant = "primary",
            children,
            className = "",
            disabled = false,
            onClick,
            rounded = false,
            type = "button",
            ...props
        }: Partial<ButtonProps>,
        ref
    ) => {
        const { theme } = useTheme();
        const buttonClass = classNames(
            styles[theme],
            styles.button,
            rounded ? styles.rounded : "",
            disabled ? styles.disabled : "",
            className,
            styles[variant]
        );
        return (
            <button
                ref={ref}
                className={buttonClass}
                onClick={onClick}
                disabled={disabled}
                type={type}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;
