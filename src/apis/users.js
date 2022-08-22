import axios from "axios";
import { getToken } from "../utils/localStorageHandler";

const BaseApi = process.env.REACT_APP_BASE_API;

const users = {
    fetchUsers: (data) =>
        axios.get(
            `${BaseApi}/api/users?key=${data.key}&page=${data.current}&pageSize=${data.pageSize}`
        ),
    addUser: (data) => axios.post(`${BaseApi}/api/users/add`, data),
    getUser: (id) => axios.get(`${BaseApi}/api/users/get?id=${id}`),
    updateUser: (id, data) =>
        axios.post(`${BaseApi}/api/users/update?id=${id}`, data),
    deleteUser: (id) => axios.delete(`${BaseApi}/api/users/delete?id=${id}`),
};

export default users;
