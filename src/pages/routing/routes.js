import AccauntsPage from "../accauntsPage/index.jsx";
import EditUserPage from "../editUserPage/index.jsx";
import HistoryPage from "../historyPage/index.jsx";
import SignInPage from "../signInPage/index.jsx";
import MainPage from "../mainPage/index.jsx";
import NotFoundPage from "../notFoundPage/index.jsx";
import UserPage from "../userPage/index.jsx";
import SignUpPage from "../signUpPage/index.jsx";

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
    signIn: {
        title: "SignIn Page",
        path: "/signIn",
        element: <SignInPage />,
    },
    signUp: {
        title: "SignUp Page",
        path: "/signUp",
        element: <SignUpPage />,
    },
    notFound: {
        title: "Not Found Page",
        path: "*",
        element: <NotFoundPage />,
    },
};
