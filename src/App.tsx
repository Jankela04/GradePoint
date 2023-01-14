import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/notes",
        element: <Notes />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
