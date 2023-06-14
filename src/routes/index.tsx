/* eslint-disable react/jsx-no-useless-fragment */

import { useRoutes } from "react-router-dom";
import { ProtectedWelcome, ProtectedRoutes } from "./ProtectedRoutes";
import lazyImport from "@/utils/LazyImport";

const { ErrorPage } = lazyImport(() => import("@/pages/Error"), "ErrorPage");
const { WelcomePage } = lazyImport(
    () => import("@/pages/Welcome"),
    "WelcomePage"
);
const { HomePage } = lazyImport(() => import("@/pages/Home"), "HomePage");

const { NotesPage } = lazyImport(() => import("@/pages/Notes"), "NotesPage");
const { NotePage } = lazyImport(() => import("@/pages/Notes"), "NotePage");
const { EditNotePage } = lazyImport(
    () => import("@/pages/Notes"),
    "EditNotePage"
);
const { NewNotePage } = lazyImport(
    () => import("@/pages/Notes"),
    "NewNotePage"
);

const { ClassesPage } = lazyImport(
    () => import("@/pages/Classes"),
    "ClassesPage"
);
const { ClassPage } = lazyImport(() => import("@/pages/Classes"), "ClassPage");
const { NewClassPage } = lazyImport(
    () => import("@/pages/Classes"),
    "NewClassPage"
);
const { NewGradePage } = lazyImport(
    () => import("@/pages/Classes"),
    "NewGradePage"
);

const routes = [
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
];

function AppRoutes() {
    const element = useRoutes([...routes]);

    return <>{element}</>;
}

export default AppRoutes;
