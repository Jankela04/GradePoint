import { ChangeEvent } from "react";

type Props = {
    type: string;
    value: string;
    className: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
    return <input {...props} />;
};

export default Input;
