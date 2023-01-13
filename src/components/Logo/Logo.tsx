import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const Logo = (props: Props) => {
    const navigate = useNavigate();
    return (
        <span
            className="logo"
            onClick={() => {
                navigate("/");
            }}
        >
            <span className="grade">Grade</span>
            <span className="point">Point</span>
        </span>
    );
};

export default Logo;
