import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Notes from "./pages/Notes/Notes";
import Home from "./pages/Home/Home";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ProtectedWelcome from "./utils/ProtectedWelcome";

const router = createBrowserRouter([
    {
        element: <ProtectedWelcome />,
        children: [
            {
                path: "/",
                element: <Welcome />,
            },
        ],
    },
    {
        element: <ProtectedRoutes />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/notes",
                element: <Notes />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
