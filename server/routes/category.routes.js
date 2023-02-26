import express from "express";
import { Category } from "../models/Category.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", async (req, res) => {
    try {
        const list = await Category.find();
        res.status(200).send(list)
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
})

export default router;