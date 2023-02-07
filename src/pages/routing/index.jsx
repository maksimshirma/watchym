import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.js";
import { LayoutMain } from "../../shared";
import { useSelector } from "react-redux";
import { getIsLoggedIn, UserLoader } from "../../entities";

export const Routing = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    if (isLoggedIn) {
        return (
            <Routes>
                {Object.keys(routes).map((key) => {
                    if (key !== "signUp" && key !== "signIn" && key !== "main") {
                        return (
                            <Route
                                key={routes[key].title}
                                path={routes[key].path}
                                element={
                                    <LayoutMain>
                                        <UserLoader>{routes[key].element}</UserLoader>
                                    </LayoutMain>
                                }
                            />
                        );
                    }
                })}
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route
                    key={routes.main.title}
                    path={routes.main.path}
                    element={<LayoutMain>{routes.main.element}</LayoutMain>}
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
            </Routes>
        );
    }
};
