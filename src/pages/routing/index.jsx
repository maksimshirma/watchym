import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routes.js";
import { LayoutMain } from "../../shared";
import { getIsLoggedIn } from "../../entities";

const ProtectedLoggedInRoutes = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

const ProtectedLoggedOutRoutes = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return !isLoggedIn ? <Outlet /> : <Navigate to="/analytics" />;
};

export const Routing = () => {
    return (
        <Routes>
            <Route element={<ProtectedLoggedOutRoutes />}>
                <Route
                    key={routes.unauthorized.title}
                    path={routes.unauthorized.path}
                    element={<LayoutMain>{routes.unauthorized.element}</LayoutMain>}
                />
                <Route
                    key={routes.signIn.title}
                    path={routes.signIn.path}
                    element={<LayoutMain>{routes.signIn.element}</LayoutMain>}
                />
                <Route
                    key={routes.signUp.title}
                    path={routes.signUp.path}
                    element={<LayoutMain>{routes.signUp.element}</LayoutMain>}
                />
            </Route>
            <Route element={<ProtectedLoggedInRoutes />}>
                {Object.keys(routes).map((key) => {
                    if (key !== "signUp" && key !== "signIn" && key !== "unauthorized") {
                        return (
                            <Route
                                key={routes[key].title}
                                path={routes[key].path}
                                element={<LayoutMain>{routes[key].element}</LayoutMain>}
                            />
                        );
                    }
                })}
            </Route>
        </Routes>
    );
};
