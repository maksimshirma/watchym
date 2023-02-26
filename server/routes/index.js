import express from "express";
import categoryRoutes from "./category.routes.js";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import accountsRoutes from "./accounts.routes.js";
import operationsRoutes from "./operations.routes.js";

const routes = express.Router({
    mergeParams: true
});

routes.use("/categories", categoryRoutes);
routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
routes.use("/accounts", accountsRoutes);
routes.use("/operations", operationsRoutes);

export default routes;