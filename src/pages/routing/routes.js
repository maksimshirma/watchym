import AccauntsPage from "../accauntsPage/index.jsx";
import EditUserPage from "../editUserPage/index.jsx";
import HistoryPage from "../historyPage/index.jsx";
import LoginPage from "../loginPage/index.jsx";
import MainPage from "../mainPage/index.jsx";
import NotFoundPage from "../notFoundPage/index.jsx";
import UserPage from "../userPage/index.jsx";

export const routes = {
    main: {
        title: "Main Page",
        path: "/",
        element: <MainPage />,
    },
    user: {
        title: "User Page",
        path: "/user",
        element: <UserPage />,
    },
    editUser: {
        title: "Edit User Page",
        path: "/user/:edit",
        element: <EditUserPage />,
    },
    history: {
        title: "History Page",
        path: "/history",
        element: <HistoryPage />,
    },
    accaunts: {
        title: "Accaunts Page",
        path: "/accaunts",
        element: <AccauntsPage />,
    },
    login: {
        title: "Login Page",
        path: "/login",
        element: <LoginPage />,
    },
    notFound: {
        title: "Not Found Page",
        path: "*",
        element: <NotFoundPage />,
    },
};
