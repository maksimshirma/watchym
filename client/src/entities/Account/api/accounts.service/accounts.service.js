import { httpService, localStorageService } from "../../../../shared";

const userEndpoint = "user/";
const accountEndpoint = "/accounts/";

const accountsService = {
    get: async (payload) => {
        const { data } = await httpService.get(
            userEndpoint + localStorageService.getUserId() + accountEndpoint + payload
        );
        return data;
    },
    getAll: async () => {
        const { data } = await httpService.get(userEndpoint + localStorageService.getUserId() + accountEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            userEndpoint + localStorageService.getUserId() + accountEndpoint + payload._id,
            payload
        );
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.put(
            userEndpoint + localStorageService.getUserId() + accountEndpoint + payload._id,
            payload
        );
        return data;
    },
    delete: async (payload) => {
        const { data } = await httpService.delete(
            userEndpoint + localStorageService.getUserId() + accountEndpoint + payload
        );
        return data;
    },
};

export default accountsService;
