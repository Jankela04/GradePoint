import { ReactNode } from "react";
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

function Button({
    variant,
    children,
    className = "",
    disabled = false,
    onClick,
    rounded = false,
    type = "button",
}: Partial<ButtonProps>) {
    const { theme } = useTheme();
    const buttonClass = classNames(
        styles[theme],
        styles.button,
        rounded ? styles.rounded : "",
        disabled ? styles.disabled : "",
        className,
        variant === "primary" ? styles.primary : "",
        variant === "secondary" ? styles.secondary : "",
        variant === "danger" ? styles.danger : "",
        variant === "neutral" ? styles.neutral : ""
    );
    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            type={type === "button" ? "button" : "submit"}
        >
            {children}
        </button>
    );
}

export default Button;
