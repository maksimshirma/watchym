import { httpService, localStorageService } from "../../../../shared";

const userEndpoint = "user/";
const operationsEndpoint = "/operations/";

const operationsService = {
    get: async (payload) => {
        const { data } = await httpService.get(
            userEndpoint + localStorageService.getUserId() + operationsEndpoint + payload
        );
        return data;
    },
    getAll: async () => {
        const { data } = await httpService.get(userEndpoint + localStorageService.getUserId() + operationsEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            userEndpoint + localStorageService.getUserId() + operationsEndpoint + payload._id,
            payload
        );
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.put(
            userEndpoint + localStorageService.getUserId() + operationsEndpoint + payload._id,
            payload
        );
        return data;
    },
    delete: async (payload) => {
        const { data } = await httpService.delete(
            userEndpoint + localStorageService.getUserId() + operationsEndpoint + payload
        );
        return data;
    },
};

export default operationsService;
