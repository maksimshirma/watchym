import { httpService, localStorageService } from "../../../../shared";

const endpoint = "accounts/";

const accountsService = {
    get: async (payload) => {
        const { data } = await httpService.get(endpoint + localStorageService.getUserId() + "/" + payload);
        return data;
    },
    getAll: async () => {
        const { data } = await httpService.get(endpoint + localStorageService.getUserId());
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(endpoint + localStorageService.getUserId() + "/" + payload._id, payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.put(endpoint + localStorageService.getUserId() + "/" + payload._id, payload);
        return data;
    },
    delete: async (payload) => {
        const { data } = await httpService.delete(endpoint + localStorageService.getUserId() + "/" + payload);
        return data;
    },
};

export default accountsService;
