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

export const consultarFuncionariosAsync = async () => {
  try {
    const response = await instance.get("/funcionarios");
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
