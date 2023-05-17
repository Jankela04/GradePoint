import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import styles from "./styles.module.scss";

type Props = {
    title: string;
    icon: string;
    color: string;
    to: string;
    label: string;
};

const Card = ({ title, icon, color, to, label }: Props) => {
    const { theme } = useTheme();
    const [hovered, setHovered] = useState(false);

    const cardStyle = {
        backgroundColor: color,
    };

    const navigate = useNavigate();
    return (
        <div
            className={`${styles.card}`}
            style={cardStyle}
            onClick={() => navigate(to)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h3>{title}</h3>
            <img src={icon} />

            {hovered && (
                <p className={classNames(styles.label, styles[theme])}>
                    {label}
                </p>
            )}
        </div>
    );
};

export default Card;
