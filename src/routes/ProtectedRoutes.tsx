import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "@/hooks/useLocalStorage";
import { MainLayout } from "@/layout/MainLayout";

function ProtectedRoutes() {
    const [name] = useLocalStorage("name", "");

    return name !== "" ? (
        <MainLayout>
            <Outlet />
        </MainLayout>
    ) : (
        <Navigate to="/" />
    );
}

function ProtectedWelcome() {
    const [name] = useLocalStorage("name", "");

    return name === "" ? <Outlet /> : <Navigate to="/home" />;
}

export { ProtectedRoutes, ProtectedWelcome };
