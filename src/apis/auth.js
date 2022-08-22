import axios from "axios";

const auth = {
    login: (data) => axios.post("http://localhost:8080/api/login", data),
    logout: () => {},
    register: () => {},
};

export default auth;
