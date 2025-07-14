"use client";

import { GetProdutoById, GetProdutosByParametros, PostAddProduto, PutAlterarProduto, PatchAtualizarProduto, DeleteProduto, PostMovimentarEstoque } from "@/services/produto.service";
import { ApplicationContext } from "./application.context";
import { createContext, useContext, useState } from "react";

export const ProdutoContext = createContext();

export default function ProdutoProvider({ children }) {
    const applicationContext = useContext(ApplicationContext);
    const [produtoSelect, setProdutoSelect] = useState(null);
    const [produtos, setProdutos] = useState([]);
    

    const produtoById = async (id) => {
        try {
            if (id == undefined) {
                return `Id não informado!`;
            }
            applicationContext.loadingPageDefine(true);

            const response = await GetProdutoById(id);

            if (!response || response.status !== 200) {
                setProdutoSelect(null);
                applicationContext.callError("Error ao buscar o produto!")
            } else {
                setProdutoSelect(response.data.payload);
            }

            applicationContext.loadingDefine(false);
        }
        catch (ex){
            console.error(ex);
        }
        finally {
            applicationContext.loadingPageDefine(false);
        }
    };

    const consultarProdutos = async (filtro = "") => {
        try {
            applicationContext.loadingDefine(true);
            const response = await GetProdutosByParametros(filtro);

            if (!response || response.status !== 200) {
                applicationContext.callError("Erro ao buscar os produtos!");
                setProdutos([]);
                return false;
            }

            const data = response.data.payload;
            setProdutos(Array.isArray(data) ? data : [data])

            applicationContext.loadingDefine(false);
            return true;
        } 
        catch {
            applicationContext.callError("Erro ao buscar os produtos!");
            setProdutos([]);
            return false;
        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const cadastrarProdutoPost = async (produto) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await PostAddProduto(produto);

            if (!response || response.status !== 200) {
                applicationContext.callError("Erro ao cadastrar o produto!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return true;
        }
        catch {
            applicationContext.callError("Erro ao cadastrar o produto!");
            return false;
        }
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const atualizarProdutoCompleto = async (id, produto) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await PutAlterarProduto(id, produto);

            if(!response || response.status !== 200) {
                applicationContext.callError("Error ao alterar o produto!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return true;
        } 
        catch (ex) {
            applicationContext.callError("Error ao alterar o produto!");
            return false;
        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const atualizarProdutoParcial = async (id, produto) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await PatchAtualizarProduto(id, produto);

            if(!response || response.status !== 200) {
                applicationContext.callError("Error ao atualizar o produto!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return true;
        } 
        catch {
            applicationContext.callError("Error ao atualizar o produto!");
            return false;
        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const deleteProduto = async (id) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await DeleteProduto(id);

            if (!response || response.status !== 200) {
                applicationContext.callError("Erro ao excluir o produto!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return true;

        } 
        catch {
            applicationContext.callError("Error ao excluir o produto!");
            return false;

        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const movimentarEstoque = async (movimentarProdutos) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await PostMovimentarEstoque(movimentarProdutos);

            if (!response || response.status !== 200) {
                applicationContext.callError("Erro ao movimentar o estoque!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return response.data;
        } 
        catch {
            applicationContext.callError("Erro ao movimentar o estoque!");
            return false;

        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const values = {
        produtoSelect : produtoSelect,
        produtos : produtos,
        produtoById : produtoById,
        consultarProdutos : consultarProdutos,
        cadastrarProdutoPost : cadastrarProdutoPost,
        atualizarProdutoCompleto : atualizarProdutoCompleto,
        atualizarProdutoParcial : atualizarProdutoParcial,
        deleteProduto : deleteProduto,
        movimentarEstoque : movimentarEstoque
    }

    return (
        <ProdutoContext.Provider value = {values}>
            {children}
        </ProdutoContext.Provider>
    )

}