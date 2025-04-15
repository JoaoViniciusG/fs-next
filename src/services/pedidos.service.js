import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL
})

export const getPedidos = async () => {
    try {
        const response = await instance.get("/pedidos", { withCredentials: true });

        return response;
    }
    catch {
        return false;
    }
};