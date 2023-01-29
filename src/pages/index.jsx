import { Route, Routes } from "react-router-dom";
import TestPage from "./mainPage/index.jsx";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} />
        </Routes>
    );
};
