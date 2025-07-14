import axios from "axios";

const instance = axios.create({
  timeout: 5000, // de 5 para 15 segundos
  baseURL: process.env.BASE_URL,
  withCredentials: true,
  validateStatus: () => true
});

export async function GetEnderecoById(id) {
  try {
    const response = await instance.get(`/endereco/${id}`);
    return response;
  }
  catch (ex) {
    console.error(ex);
    return false;
  }
}

export async function PutAlterarEndereco(endereco) {
  try {
    const response = await instance.put("/endereco/", endereco);
    return response;
  }
  catch (ex) {
    console.error(ex);
    return false;
  }
}

export async function GetEnderecoByIdRef(id, searchParamName) {
  try {
    const response = await instance.get(`/endereco?${searchParamName}=${id}`);
    return response;
  }
  catch (ex) {
    console.error(ex);
    return false;
  }
}

export async function PostAddEndereco(endereco) {
  try {
    const response = await instance.post("/endereco/add", endereco);
    return response;
  }
  catch (ex) {
    console.error(ex);
    return false;
  }
}

export async function DeleteEndereco(id) {
  try {
    const response = await instance.delete(`/endereco/delete/${id}`);
    return response;
  }
  catch (ex) {
    console.error(ex);
    return false;
  }
}

export async function BuscarCEP(cep) {
  try {
    const response = await axios.create().get(`https://viacep.com.br/ws/${cep}/json/`);
    return response;
  } catch {
    return false;
  }
}