import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

export const cadastrarMarcaAsync = async (dadosMarca) => {
  try {
    const response = await instance.post("/marcas", dadosMarca);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editarMarcaAsync = async (idMarca, dadosMarca) => {
  try {
    const response = await instance.put(`/marcas/${idMarca}`, dadosMarca);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const excluirMarcaAsync = async (idMarca) => {
  try {
    const response = await instance.delete(`/marcas/${idMarca}`);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/*export const consultarMarcasAsync = async () => {
  try {
    const response = await instance.get("/marcas", { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};*/


export const consultarMarcaPorIdAsync = async (idMarca) => {
  try {
    const response = await instance.get(`/marcas/${idMarca}`);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultarMarcaPorParamsAsync = async (param) => {
  try {
    let response;

    const isEmpty =
      param == null ||
      param === "" ||
      (typeof param === "object" && Object.keys(param).length === 0);

    if (isEmpty) {
      response = await instance.get(`/marcas`);
    } else {
      response = await instance.get(`/marcas?nome=${encodeURIComponent(param)}`);
    }

    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};


export const editarMarcaParcialAsync = async (idMarca, dadosParciais) => {
  try {
    const response = await instance.patch(`/marcas/${idMarca}`, dadosParciais);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};