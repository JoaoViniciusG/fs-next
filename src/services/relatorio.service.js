import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
  withCredentials: true
})

export async function getRelatorios() {
    return await instance.get("/relatorio?dataInicio=2025-05-10&dataFim=2025-05-15&dataRefInicio=2025-05-17&dataRefFim=2025-05-20");
}