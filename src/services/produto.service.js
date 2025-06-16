import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
  withCredentials: true
});

export async function GetProdutoById (id) {
    try {
        const response = await instance.get(`/produto/${id}`);
        return response;
    } 
    catch (ex) {
        console.error(ex);
        return false;
    }
}

export async function GetProdutoByName(nome) {
    try {
        const response = await instance.get(`/produto?${nome}`);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function GetProdutoByQuantidade(quantidade) {
    try {
        const response = await instance.get(`/produto?{${quantidade}}`);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}