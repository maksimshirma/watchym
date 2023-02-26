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
        title: "главная",
        path: "/",
        element: <UnauthorizedPage />,
    },
    settings: {
        title: "редактировать профиль",
        path: "/user/:edit",
        element: <SettingsPage />,
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
    signIn: {
        title: "вход",
        path: "/signIn",
        element: <SignInPage />,
    },
    signUp: {
        title: "регистрация",
        path: "/signUp",
        element: <SignUpPage />,
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
