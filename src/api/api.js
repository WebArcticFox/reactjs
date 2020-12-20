import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "c2a22318-a7af-4454-8310-6e9aed9fb5cd"
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
    },
    login(data) {
        debugger
        return instance.post(`auth/login`,data)
    }
}
