import { httpService } from "../../../../shared";

const operationsEndpoint = "operations/";

const operationsService = {
    get: async () => {
        const { data } = await httpService.get(operationsEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(operationsEndpoint, payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(operationsEndpoint + payload._id, payload);
        return data;
    },
    delete: async (payload) => {
        const { data } = await httpService.delete(operationsEndpoint + payload);
        return data;
    },
};

export default operationsService;
