import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL
});

export const cadastrarclienteAsync = async (dadoscliente) => {
  try {
    const response = await instance.post("/clientes", dadoscliente, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editarclienteAsync = async (idcliente, dadoscliente) => {
  try {
    const response = await instance.put(`/clientes/${idcliente}`, dadoscliente, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const excluirclienteAsync = async (idcliente) => {
  try {
    const response = await instance.delete(`/clientes/${idcliente}`, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultarclientesAsync = async () => {
  try {
    const response = await instance.get("/clientes", { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
