import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosService = axios;

axiosService.defaults.baseURL = "http://localhost:3000";

axiosService.interceptors.response.use(
    (response) => response,
    (error) => {
        const navigate = useNavigate();
        if (error.response.status === 404) {
            navigate("/404");
        }
        return Promise.reject(error);
    }
);

export default axiosService;
