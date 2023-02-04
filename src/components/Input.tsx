import { FC } from "react";

const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <input {...props} />;
};

export default Input;
