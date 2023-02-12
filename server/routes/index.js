import express from "express";
import categoryRoutes from "./category.routes.js";
import authRoutes from "./auth.routes.js";

const routes = express.Router({
    mergeParams: true
});

routes.use("/categories", categoryRoutes);
routes.use("/auth", authRoutes);

export default routes;