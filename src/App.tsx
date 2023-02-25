import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Notes from "./pages/Notes/Notes";
import Home from "./pages/Home/Home";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { ProtectedWelcome } from "./utils/ProtectedRoutes";
import Note from "./pages/Notes/pages/Note/Note";
import NewNote from "./pages/Notes/pages/NewNote/NewNote";
import Error from "./pages/Error/Error";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layout/MainLayout/MainLayout";
import Edit from "./pages/Notes/pages/Note/pages/Edit/Edit";
import Classes from "./pages/Classes/Classes";

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
                element: (
                    <MainLayout>
                        <Notes />
                    </MainLayout>
                ),
            },
            {
                path: "/notes/new",
                element: (
                    <MainLayout>
                        <NewNote />
                    </MainLayout>
                ),
            },
            {
                path: "/notes/:id",
                element: (
                    <MainLayout>
                        <Note />
                    </MainLayout>
                ),
            },
            {
                path: "/notes/:id/edit",
                element: (
                    <MainLayout>
                        <Edit />
                    </MainLayout>
                ),
            },
            {
                path: "/classes",
                element: (
                    <MainLayout>
                        <Classes />
                    </MainLayout>
                ),
            },
            {
                path: "/*",
                element: <Error />,
            },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
