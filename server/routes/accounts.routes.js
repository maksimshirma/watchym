import express from "express";
import { Account } from "../models/Account.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", auth, async (req, res) => {
    try {
        const { orderBy, equalTo } = req.query;
        if (orderBy && equalTo) {
            const list = await Account.find({ [orderBy]: equalTo });
            return res.send(list);
        }
        return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});


router.delete("/:accountId", auth, async (req, res) => {
    try {
        const { accountId } = req.params;
        const user = await req.user
        const deletedAccount = await Account.findById(accountId);
        if (deletedAccount.userId.toString() === user._id) {
            await deletedAccount.remove();
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
        const newAccount = await Account.create({
            ...req.body,
            userId: user._id,
        });
        return res.status(201).send(newAccount);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.patch("/:accountId", auth, async (req, res) => {
    try {
        const { accountId } = req.params;
        if (accountId) {
            const updatedAccount = await Account.findByIdAndUpdate(accountId, req.body, { new: true });
            return res.send(updatedAccount)
        }
    return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

export default router;