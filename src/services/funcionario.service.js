import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL
});

export const cadastrarFuncionarioAsync = async (dadosFuncionario) => {
  try {
    const response = await instance.post("/funcionarios", dadosFuncionario, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editarFuncionarioAsync = async (idFuncionario, dadosFuncionario) => {
  try {
    const response = await instance.put(`/funcionarios/${idFuncionario}`, dadosFuncionario, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const excluirFuncionarioAsync = async (idFuncionario) => {
  try {
    const response = await instance.delete(`/funcionarios/${idFuncionario}`, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultarFuncionariosAsync = async () => {
  try {
    const response = await instance.get("/funcionarios", { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
