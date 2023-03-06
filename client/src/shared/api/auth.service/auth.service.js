import axios from "axios";
import config from "../../config/config.json";
import localStorageService from "../localStorage.service";

const httpAuth = axios.create({
    baseURL: config.API_BASE_URL,
});

const authService = {
    register: async (payload) => {
        const { data } = await httpAuth.post("auth/signUp", payload);
        return data;
    },
    login: async (payload) => {
        const { data } = await httpAuth.post("auth/signInWithPassword", payload);
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post("auth/token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken(),
        });
        return data;
    },
};

export default authService;
