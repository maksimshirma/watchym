import HistoryPage from "../historyPage/index.jsx";
import UnauthorizedPage from "../unauthorized/index.jsx";
import NotFoundPage from "../notFoundPage/index.jsx";
import AnalyticsPage from "../analyticsPage/index.jsx";
import SignOutPage from "../signOutPage/index.jsx";
import UserPage from "../userPage/index.jsx";

export const routes = {
    authorization: {
        title: "вход",
        path: "/",
        element: <UnauthorizedPage />,
    },
    user: {
        title: "страница пользователя",
        path: "/user",
        element: <UserPage />,
    },
    analytics: {
        title: "аналитика",
        path: "/analytics",
        element: <AnalyticsPage />,
    },
    history: {
        title: "операции",
        path: "/history",
        element: <HistoryPage />,
    },
    signOut: {
        title: "выход",
        path: "/signOut",
        element: <SignOutPage />,
    },
    notFound: {
        title: "Страница не найдена",
        path: "*",
        element: <NotFoundPage />,
    },
};
