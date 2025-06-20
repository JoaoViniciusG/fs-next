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

export async function GetProdutoByValorUnitario(valorUnitario) {
    try {
        const response = await instance.get(`/produto?{${valorUnitario}}`);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function GetProdutoByMarca(marca) {
    try {
        const response = await instance.get(`/produto?{${marca}}`);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function GetProdutoByIdEmpresa(idEmpresa) {
    try {
        const response = await instance.get(`/produto?{${idEmpresa}}`);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PostAddProduto(produto) {
    try {
        const response = await instance.post(`/produto/add`, produto);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PutAlterarProduto(id) {
    try {
        const response = await instance.put(`/produto/change/{${id}}`);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PatchAtualizarProduto(id) {
    try {
        const response = await instance.patch(`/produto/edit/{${id}}`);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function DeleteProduto(id) {
    try {
        const response = await instance.delete(`/produto/{${id}}`);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PostMovimentarEstoque(movimentar) {
    try {
        const response = await instance.post(`/movimentar`, movimentar);
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}