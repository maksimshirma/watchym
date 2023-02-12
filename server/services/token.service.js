import jwt from "jsonwebtoken";
import config from "config";
import { Token } from "../models/Token.js";


class TokenService {
    generate(payload) {
        const accesToken = jwt.sign(payload, config.get("accessSecret"), {
            expiresIn: "1h"
        });
        const refreshToken = jwt.sign(payload, config.get("refreshSecret"));
        return {
            accesToken,
            refreshToken,
            expiresIn: 3600,
        }
    };
    async save(userId, refreshToken) {
        const data = await Token.findOne({ user: userId });
        if (data) {
            data.refreshToken = refreshToken;
            return data.save();
        }
        const token = await Token.create({ user: userId, refreshToken });
        return token;
    };
    async validateRefresh(refreshToken) {
        try {
            return jwt.verify(refreshToken, config.get("refreshSecret"));
        } catch (error) {
            return null;
        }
    };
    async findToken(refreshToken) {
        try {
            return await Token.findOne({ refreshToken });
        } catch (error) {
            return null;
        } 
    }
}

export default new TokenService();