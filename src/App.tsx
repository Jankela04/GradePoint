import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Notes from "./pages/Notes/Notes";
import Home from "./pages/Home/Home";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { ProtectedWelcome } from "./utils/ProtectedRoutes";
import Note from "./pages/Notes/pages/Note/Note";
import NewNote from "./pages/Notes/pages/NewNote/NewNote";
import Error from "./pages/Error/Error";

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
            {
                path: "/notes/new",
                element: <NewNote />,
            },
            {
                path: "/notes/:id",
                element: <Note />,
            },
            {
                path: "/*",
                element: <Error />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
