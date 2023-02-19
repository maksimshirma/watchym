import SettingsPage from "../settingsPage/index.jsx";
import HistoryPage from "../historyPage/index.jsx";
import SignInPage from "../signInPage/index.jsx";
import UnauthorizedPage from "../unauthorized/index.jsx";
import NotFoundPage from "../notFoundPage/index.jsx";
import SignUpPage from "../signUpPage/index.jsx";
import AnalyticsPage from "../analyticsPage/index.jsx";
import SignOutPage from "../signOutPage/index.jsx";

export const routes = {
    unauthorized: {
        title: "Главная",
        path: "/",
        element: <UnauthorizedPage />,
    },
    settings: {
        title: "Редактировать профиль",
        path: "/user/:edit",
        element: <SettingsPage />,
    },
    analytics: {
        title: "Аналитика",
        path: "/analytics",
        element: <AnalyticsPage />,
    },
    history: {
        title: "Операции",
        path: "/history",
        element: <HistoryPage />,
    },
    signIn: {
        title: "Вход",
        path: "/signIn",
        element: <SignInPage />,
    },
    signUp: {
        title: "Регистрация",
        path: "/signUp",
        element: <SignUpPage />,
    },
    signOut: {
        title: "Выход",
        path: "/signOut",
        element: <SignOutPage />,
    },
    notFound: {
        title: "Страница не найдена",
        path: "*",
        element: <NotFoundPage />,
    },
};
