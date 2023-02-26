import express from "express";
import { Operation } from "../models/Operation.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", auth, async (req, res) => {
    try {
        const { orderBy, equalTo } = req.query;
        if (orderBy && equalTo) {
            const list = await Operation.find({ [orderBy]: equalTo });
            return res.send(list);
        }
        return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});


router.delete("/:operationId", auth, async (req, res) => {
    try {
        const { operationId } = req.params;
        const user = await req.user
        const deletedOperation = await Operation.findById(operationId);
        if (deletedOperation.userId.toString() === user._id) {
            await deletedOperation.remove();
            return res.send(null);
        }
        return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const user = await req.user;
        const newOperation = await Operation.create({
            ...req.body,
            userId: user._id,
        });
        return res.status(201).send(newOperation);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.patch("/:operationId", auth, async (req, res) => {
    try {
        const { operationId } = req.params;
        if (operationId) {
            const updatedOperation = await Operation.findByIdAndUpdate(operationId, req.body, { new: true });
            return res.send(updatedOperation)
        }
    return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

export default router;