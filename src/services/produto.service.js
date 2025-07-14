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

export async function GetProdutosByParametros(filtro) {
    try {
        const response = await instance.get(`/produto?filtro=${filtro}`);
        return response;
    }
    catch (ex) {
        console.error(ex);
        return false;
    }
}

/* export async function GetProdutoByName(nome) {
    try {
        const response = await instance.get(`/produto?nome=${nome}`);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function GetProdutoByQuantidade(quantidade) {
    try {
        const response = await instance.get(`/produto?quantidade=${quantidade}`);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function GetProdutoByValorUnitario(valorUnitario) {
    try {
        const response = await instance.get(`/produto?valorUnitario=${valorUnitario}`);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function GetProdutoByMarca(marca) {
    try {
        const response = await instance.get(`/produto?marca=${marca}`);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function GetProdutoByIdEmpresa(idEmpresa) {
    try {
        const response = await instance.get(`/produto?idEmpresa=${idEmpresa}`);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}
 */


export async function PostAddProduto(produto) {
    try {
        const response = await instance.post(`/produto/add`, produto);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PutAlterarProduto(id, produto) {
    try {
        const response = await instance.put(`/produto/change/${id}`, produto);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PatchAtualizarProduto(id, produto) {
    try {
        const response = await instance.patch(`/produto/edit/${id}`, produto);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function DeleteProduto(id) {
    try {
        const response = await instance.delete(`/produto/${id}`);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}

export async function PostMovimentarEstoque(movimentar) {
    try {
        const response = await instance.post(`/produto/movimentar/`, movimentar);
        return response;
    }
    catch (ex){
        console.error(ex);
        return false;
    }
}