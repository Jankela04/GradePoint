import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {
    title: string;
    icon: string;
    color: string;
    to: string;
};

const Card = ({ title, icon, color, to }: Props) => {
    const navigate = useNavigate();
    return (
        <div
            className={`${styles.card}`}
            style={{ backgroundColor: color }}
            onClick={() => navigate(to)}
        >
            {/*
            //todo fix missing text under card on hover,
            */}
            <h3>{title}</h3>
            <img src={icon} />
        </div>
    );
};

export default Card;
