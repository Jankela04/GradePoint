import { createBrowserRouter } from "react-router-dom";
import Classes from "@/pages/Classes/Classes";
import Class from "@/pages/Classes/pages/Class/Class";
import NewGrade from "@/pages/Classes/pages/Class/pages/NewGrade/NewGrade";
import NewClassPage from "@/pages/Classes/pages/NewClassPage/NewClassPage";
import { HomePage } from "@/pages/Home";
import { EditNotePage, NotesPage, NewNotePage, NotePage } from "@/pages/Notes";
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
                element: <HomePage />,
            },
            {
                path: "/notes",
                element: <NotesPage />,
            },
            {
                path: "/notes/new",
                element: <NewNotePage />,
            },
            {
                path: "/notes/:id",
                element: <NotePage />,
            },
            {
                path: "/notes/:id/edit",
                element: <EditNotePage />,
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
