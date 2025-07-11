import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

export const cadastrarClienteAsync = async (dadoscliente) => {
  try {
    const response = await instance.post("/clientes", dadoscliente);
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editarClienteAsync = async (idcliente, dadoscliente) => {
  try {
    const response = await instance.put(`/clientes/${idcliente}`, dadoscliente);
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const excluirClienteAsync = async (idcliente) => {
  try {
    const response = await instance.delete(`/clientes/${idcliente}`);
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const consultarClientesAsync = async (param) => {
try {
    let response;

    const isEmpty =
      param == null ||
      param === "" ||
      (typeof param === "object" && Object.keys(param).length === 0);

    if (isEmpty) {
      response = await instance.get(`/clientes`);
    } else {
      response = await instance.get(`/clientes?nome=${encodeURIComponent(param)}`);
    }

    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
