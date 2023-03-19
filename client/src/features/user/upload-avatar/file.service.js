import { httpService } from "../../../shared";

const accountEndpoint = "files/";

const fileService = {
    get: async () => {
        const { data } = await httpService.get(accountEndpoint);
        return data;
    },
    create: async (payload) => {
        const formData = new FormData();
        formData.append("file", payload);
        const { data } = await httpService.post(accountEndpoint, formData);
        console.log(data);
        return data;
    },
};

export default fileService;
