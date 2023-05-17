import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Classes from "@/pages/Classes/Classes";
import Class from "@/pages/Classes/pages/Class/Class";
import NewGrade from "@/pages/Classes/pages/Class/pages/NewGrade/NewGrade";
import NewClassPage from "@/pages/Classes/pages/NewClassPage/NewClassPage";
import Home from "@/pages/Home/Home";
import Notes from "@/pages/Notes/Notes";
import NewNote from "@/pages/Notes/pages/NewNote/NewNote";
import Note from "@/pages/Notes/pages/Note/Note";
import Edit from "@/pages/Notes/pages/Note/pages/Edit/Edit";
import Welcome from "@/pages/Welcome/Welcome";
import { ProtectedWelcome, ProtectedRoutes } from "@/utils/ProtectedRoutes";
import Error from "@/pages/Error/Error";

export const router = createBrowserRouter([
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
                path: "/classes/new",
                element: (
                    <MainLayout>
                        <NewClassPage />
                    </MainLayout>
                ),
            },
            {
                path: "/classes/:id",
                element: (
                    <MainLayout>
                        <Class />
                    </MainLayout>
                ),
            },
            {
                path: "/classes/:id/newGrade",
                element: (
                    <MainLayout>
                        <NewGrade />
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
