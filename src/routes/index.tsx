import { createBrowserRouter } from "react-router-dom";
import {
    ClassPage,
    ClassesPage,
    NewGradePage,
    NewClassPage,
} from "@/pages/Classes";
import { HomePage } from "@/pages/Home";
import { EditNotePage, NotesPage, NewNotePage, NotePage } from "@/pages/Notes";
import { WelcomePage } from "@/pages/Welcome";
import { ProtectedWelcome, ProtectedRoutes } from "./ProtectedRoutes";
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
                element: <ClassesPage />,
            },
            {
                path: "/classes/new",
                element: <NewClassPage />,
            },
            {
                path: "/classes/:id",
                element: <ClassPage />,
            },
            {
                path: "/classes/:id/newGrade",
                element: <NewGradePage />,
            },
            {
                path: "/*",
                element: <ErrorPage />,
            },
        ],
    },
]);

export default router;
