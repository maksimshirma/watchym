import PropTypes from "prop-types";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routes.js";
import { userModel } from "../../entities";

const ProtectedLoggedInRoutes = ({ isLoggedIn }) => {
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

ProtectedLoggedInRoutes.propTypes = {
    isLoggedIn: PropTypes.bool,
};

const ProtectedLoggedOutRoutes = ({ isLoggedIn }) => {
    return !isLoggedIn ? <Outlet /> : <Navigate to="/analytics" />;
};

ProtectedLoggedOutRoutes.propTypes = {
    isLoggedIn: PropTypes.bool,
};

export const Routing = () => {
    const isLoggedIn = useSelector(userModel.getIsLoggedIn());
    return (
        <Routes>
            <Route element={<ProtectedLoggedOutRoutes isLoggedIn={isLoggedIn} />}>
                <Route
                    key={routes.authorization.title}
                    path={routes.authorization.path}
                    element={routes.authorization.element}
                />
            </Route>
            <Route element={<ProtectedLoggedInRoutes isLoggedIn={isLoggedIn} />}>
                {Object.keys(routes).map((key) => {
                    if (key !== "unauthorized") {
                        return <Route key={routes[key].title} path={routes[key].path} element={routes[key].element} />;
                    }
                })}
            </Route>
        </Routes>
    );
};
