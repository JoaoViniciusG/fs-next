import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
  withCredentials: true
});

export async function GetFornecedorById (id) {
    try {
        const response = await instance.get(`/fornecedor/${id}`);
        return respose;
    }
    catch (ex) {
        console.error(ex);
        return false;
    }
}

export async function GetFornecedorByParametros (params) {
    try {
        const response = await instance.get("/fornecedor", { params });
        return response;
    }
    catch (ex) {
        console.error(ex);
        return false;
    }
}


export async function PostAddFornecedor(fornecedor) {
    try {
        const response = await instance.post(`/fornecedor/add`, fornecedor);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PutAlterarFornecedor(id, fornecedor) {
    try {
        const response = await instance.put(`/fornecedor/change/${id}`, fornecedor);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PatchAtualizarFornecedor(id, fornecedor) {
    try {
        const response = await instance.patch(`/fornecedor/edit/${id}`, fornecedor);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function DeleteFornecedor(id) {
    try {
        const response = await instance.delete(`/fornecedor/${id}`);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}