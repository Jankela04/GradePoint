import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Notes from "./pages/Notes/Notes";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/notes",
        element: <Notes />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
