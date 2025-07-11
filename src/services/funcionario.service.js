import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

export const cadastrarFuncionarioAsync = async (dadosFuncionario) => {
  try {
    const response = await instance.post("/funcionarios", dadosFuncionario);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editarFuncionarioAsync = async (idFuncionario, dadosFuncionario) => {
  try {
    const response = await instance.put(`/funcionarios/${idFuncionario}`, dadosFuncionario);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const excluirFuncionarioAsync = async (idFuncionario) => {
  try {
    const response = await instance.delete(`/funcionarios/${idFuncionario}`);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultarFuncionariosAsync = async (param) => {
try {
    let response;

    const isEmpty =
      param == null ||
      param === "" ||
      (typeof param === "object" && Object.keys(param).length === 0);

    if (isEmpty) {
      response = await instance.get(`/funcionarios`);
    } else {
      response = await instance.get(`/funcionarios?nome=${encodeURIComponent(param)}`);
    }

    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
