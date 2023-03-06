import express from "express";
import { Operation } from "../models/Operation.js";
import { Account } from "../models/Account.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", auth, async (req, res) => {
    try {
        const user = await req.user;
        if (user) {
            const { orderBy, equalTo } = req.query;
            if (orderBy && equalTo) {
                const list = await Operation.find({ [orderBy]: equalTo });
                return res.send(list);
            }
            const list = await Operation.find({ userId: user._id });
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
            const account = await Account.findById(deletedOperation.account);
            if (deletedOperation.type === "income") {
                if (account.amount >= deletedOperation.amount) {
                    const newAmount = account.amount - deletedOperation.amount;
                    account.amount = newAmount;
                    account.operationsIds.filter(id => id !== deletedOperation._id);
                    await Account.findByIdAndUpdate(account._id, account, { new: true });
                    await deletedOperation.remove();
                    return res.send(null);
                } else {
                    return res.status(400).json({
                        message: "Невозможно выполнить операцию.",
                    });
                }
            } else {
                const newAmount = account.amount + deletedOperation.amount;
                account.amount = newAmount;
                await Account.findByIdAndUpdate(account._id, account, { new: true });
                await deletedOperation.remove();
                return res.send(null);
            }
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
        const operation = req.body;
        const account = await Account.findById(operation.account);
        if (account.userId.toString() === user._id) {
            if (operation.type === "expense") {
                if (account.amount >= operation.amount) {
                    const newAmount = account.amount - operation.amount;
                    account.amount = newAmount;
                    if (account.operationsIds.length === 0) {
                        account.operationsIds = []
                    }
                    account.operationsIds.push(operation._id);
                    await Account.findByIdAndUpdate(account._id, account, { new: true });
                    const newOperation = await Operation.create({
                        ...operation,
                        userId: user._id,
                    });
                    return res.status(201).send(newOperation);
                } else {
                    return res.status(400).json({
                        message: "Невозможно выполнить операцию.",
                    });
                }
            } else {
                const newAmount = account.amount + operation.amount;
                account.amount = newAmount;
                if (account.operationsIds.length === 0) {
                    account.operationsIds = []
                }
                account.operationsIds.push(operation._id);
                await Account.findByIdAndUpdate(account._id, account, { new: true });
                const newOperation = await Operation.create({
                    ...operation,
                    userId: user._id,
                });
                return res.status(201).send(newOperation);
            }
        }
        return res.status(401).json({ message: "Unauthorized" });
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
            const user = await req.user;
            const newOperation = req.body;
            const prevOperation = await Operation.findById(operationId);
            if (prevOperation.userId.toString() === user._id) {
                if (newOperation.account === prevOperation.account) {
                    const account = await Account.findById(newOperation.account);
                    if (prevOperation.type === "expense") {
                        account.amount = account.amount + prevOperation.amount;
                    } else {
                        account.amount = account.amount - prevOperation.amount;
                    }
                    if (newOperation.type === "expense") {
                        if (account.amount >= newOperation.amount) {
                            const newAmount = account.amount - newOperation.amount;
                            account.amount = newAmount;
                            if (account.operationsIds.length === 0) {
                                account.operationsIds = []
                            }
                            account.operationsIds.push(newOperation._id);
                            await Account.findByIdAndUpdate(account._id, account, { new: true });
                            const updatedOperation = await Operation.findByIdAndUpdate(operationId, newOperation, { new: true });
                            return res.send(updatedOperation);
                        } else {
                            return res.status(400).json({
                                message: "Невозможно выполнить операцию.",
                            });
                        }
                    } else {
                        const newAmount = account.amount + newOperation.amount;
                        account.amount = newAmount;
                        if (account.operationsIds.length === 0) {
                            account.operationsIds = []
                        }
                        account.operationsIds.push(newOperation._id);
                        await Account.findByIdAndUpdate(account._id, account, { new: true });
                        const updatedOperation = await Operation.findByIdAndUpdate(operationId, newOperation, { new: true });
                        return res.send(updatedOperation);
                    }
                }
            }
            return res.status(401).json({ message: "Unauthorized" });
        }
        return res.status(400).json({
            message: "Невозможно выполнить операцию.",
        });
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

export default router;