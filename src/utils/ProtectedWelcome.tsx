import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const ProtectedWelcome = () => {
    const [name] = useLocalStorage("name", "");

    return name === "" ? <Outlet /> : <Navigate to="/home" />;
};

export default ProtectedWelcome;
