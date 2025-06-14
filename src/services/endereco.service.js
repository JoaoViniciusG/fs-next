import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
  withCredentials: true
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