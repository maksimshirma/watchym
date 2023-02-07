import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.js";
import { LayoutMain } from "../../shared";

export const Routing = () => {
    return (
        <Routes>
            {Object.keys(routes).map((key) => (
                <Route key={routes[key].title} path={routes[key].path} element={<LayoutMain>{routes[key].element}</LayoutMain>} />
            ))}
        </Routes>
    );
};
