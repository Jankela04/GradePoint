import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 404) {
            window.location.assign("/404");
        }
        return Promise.reject(error);
    }
);

export default axios;
