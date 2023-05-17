import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useTheme } from "@/context/ThemeContext";

type ButtonProps = {
    variant: "primary" | "secondary" | "danger" | "neutral";
    children: ReactNode;
    rounded: boolean;
    onClick: () => void;
    disabled: boolean;
    type: "button" | "submit" | "reset";
    className: string;
};

const Button: FC<Partial<ButtonProps>> = ({
    variant,
    children,
    className = "",
    disabled = false,
    onClick,
    rounded = false,
    type = "button",
}) => {
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
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
