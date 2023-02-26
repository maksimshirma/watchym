import express from "express";
import { User } from "../models/User.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router({
    mergeParams: true
});

router.get("/:userId", auth, async (req, res) => {
    try {
        const { userId } = req.params;
        if (userId) {
            const user = await User.findById(userId);
            return res.send(user)
        }
        return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
})

router.patch("/:userId", auth, async (req, res) => {
    try {
        const { userId } = req.params;
        if (userId) {
            const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
            return res.status(200).send(updatedUser)
        }
    return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
})

export default router;