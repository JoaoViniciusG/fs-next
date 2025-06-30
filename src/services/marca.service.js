import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL
});

export const cadastrarMarcaAsync = async (dadosMarca) => {
  try {
    const response = await instance.post("/marcas", dadosMarca, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editarMarcaAsync = async (idMarca, dadosMarca) => {
  try {
    const response = await instance.put(`/marcas/${idMarca}`, dadosMarca, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const excluirMarcaAsync = async (idMarca) => {
  try {
    const response = await instance.delete(`/marcas/${idMarca}`, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultarMarcasAsync = async () => {
  try {
    const response = await instance.get("/marcas", { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};


export const consultarMarcaPorIdAsync = async (idMarca) => {
  try {
    const response = await instance.get(`/marcas/${idMarca}`, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editarMarcaParcialAsync = async (idMarca, dadosParciais) => {
  try {
    const response = await instance.patch(`/marcas/${idMarca}`, dadosParciais, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};