import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const ProtectedRoutes = () => {
    const [name] = useLocalStorage("name", "");

    return name !== "" ? <Outlet /> : <Navigate to="/" />;
};

const ProtectedWelcome = () => {
    const [name] = useLocalStorage("name", "");

    return name === "" ? <Outlet /> : <Navigate to="/home" />;
};

export { ProtectedRoutes, ProtectedWelcome };
