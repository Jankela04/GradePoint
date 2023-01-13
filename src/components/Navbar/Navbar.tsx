import React from "react";
import Logo from "../Logo/Logo";
import Name from "./Name";
import "./styles.css";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav>
            <Logo />
            <Name />
        </nav>
    );
};

export default Navbar;
