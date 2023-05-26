import { createBrowserRouter } from "react-router-dom";
import Classes from "@/pages/Classes/Classes";
import Class from "@/pages/Classes/pages/Class/Class";
import NewGrade from "@/pages/Classes/pages/Class/pages/NewGrade/NewGrade";
import NewClassPage from "@/pages/Classes/pages/NewClassPage/NewClassPage";
import Home from "@/pages/Home/Home";
import Notes from "@/pages/Notes/Notes";
import NewNote from "@/pages/Notes/pages/NewNote/NewNote";
import Note from "@/pages/Notes/pages/Note/Note";
import Edit from "@/pages/Notes/pages/Note/pages/Edit/Edit";
import { WelcomePage } from "@/pages/Welcome";
import { ProtectedWelcome, ProtectedRoutes } from ".//ProtectedRoutes";
import { ErrorPage } from "@/pages/Error";

const router = createBrowserRouter([
    {
        element: <ProtectedWelcome />,
        children: [
            {
                path: "/",
                element: <WelcomePage />,
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
                path: "/notes/:id/edit",
                element: <Edit />,
            },
            {
                path: "/classes",
                element: <Classes />,
            },
            {
                path: "/classes/new",
                element: <NewClassPage />,
            },
            {
                path: "/classes/:id",
                element: <Class />,
            },
            {
                path: "/classes/:id/newGrade",
                element: <NewGrade />,
            },
            {
                path: "/*",
                element: <ErrorPage />,
            },
        ],
    },
]);

export default router;
