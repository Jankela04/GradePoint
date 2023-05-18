import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "@/hooks/useLocalStorage";

function ProtectedRoutes() {
    const [name] = useLocalStorage("name", "");

    return name !== "" ? <Outlet /> : <Navigate to="/" />;
}

function ProtectedWelcome() {
    const [name] = useLocalStorage("name", "");

    return name === "" ? <Outlet /> : <Navigate to="/home" />;
}

export { ProtectedRoutes, ProtectedWelcome };
