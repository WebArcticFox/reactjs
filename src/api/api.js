import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "54bcaff3-f3f3-4d77-8a3c-de95f570942f"
    }
});

export const usersAPI = {
    getUsers(currentPage,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
