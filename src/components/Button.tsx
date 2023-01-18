type Props = {
    label: string;
    className: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => any;
};

const Button = ({ label, className, type, onClick }: Props) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;