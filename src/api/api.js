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
    },
    follow(id) {
        return instance.post(`follow/`+id)
    },
    unFollow(id) {
        return instance.delete(`follow/`+id)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{ status: status })
    }
}

export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
