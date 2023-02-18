import classNames from "classnames";
import { ChangeEventHandler, FC } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.scss";

type InputProps = {
    autoFocus?: boolean;
    type: string;
    name?: string;
    placeholder?: string;
    value: string | number;
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    className?: string;
};

const BetterInput: FC<InputProps> = ({
    autoFocus = false,
    type,
    name,
    placeholder,
    value,
    onChange,
    className,
}) => {
    const { theme } = useTheme();

    const inputClass = classNames(styles.input, styles[theme], className);
    return (
        <input
            autoFocus={autoFocus}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={inputClass}
        />
    );
};

export default BetterInput;
