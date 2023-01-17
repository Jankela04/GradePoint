import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const ProtectedHome = () => {
    const [name] = useLocalStorage("name", "");

    return name !== "" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedHome;
