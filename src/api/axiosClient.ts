import axios from "axios";

const instance = axios.create({
    baseURL: "https://restcountries.com/v3.1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        console.log(`req: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error(`res:`, error);
    }
);

export default instance;
