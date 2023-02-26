import { httpService, localStorageService } from "../../../../shared";

const endpoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(endpoint + localStorageService.getUserId());
        return data;
    },
    edit: async (payload) => {
        const { data } = await httpService.patch(endpoint + payload._id, payload);
        return data;
    },
};

export default userService;
