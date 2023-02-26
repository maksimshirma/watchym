import { httpService, localStorageService } from "../../../../shared";

const accountEndpoint = "accounts/";

const accountsService = {
    get: async () => {
        const { data } = await httpService.get(accountEndpoint, {
            orderBy: "userId",
            equalTo: localStorageService.getUserId(),
        });
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(accountEndpoint, payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(accountEndpoint + payload._id, payload);
        return data;
    },
    delete: async (payload) => {
        const { data } = await httpService.delete(accountEndpoint + payload);
        return data;
    },
};

export default accountsService;
