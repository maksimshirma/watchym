import express from "express";
import categoryRoutes from "./category.routes.js";

const routes = express.Router({
    mergeParams: true
});

routes.use("/categories", categoryRoutes);

export default routes;