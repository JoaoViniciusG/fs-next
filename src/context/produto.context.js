"use client";

import { GetProdutoById, GetProdutosByParametros, PostAddProduto, PutAlterarProduto, PatchAtualizarProduto, DeleteProduto, PostMovimentarEstoque } from "@/services/produto.service";
import { createContext, useState } from "react";

export const ProdutoContext = createContext();

export default function ProdutoProvider({ children }) {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [produtoSelect, setProdutoSelect] = useState(null);
    const [produtos, setProdutos] = useState([]);
    

    const produtoById = async (id) => {
        try {
            if (id == undefined) {
                return `Id não informado!`;
            }
            setIsLoading(true);

            const response = await GetProdutoById(id);

            if (!response || response.status !== 200) {
                setProdutoSelect(null);
                setErrorMessage("Error ao buscar o produto!")
                setHasError(true);
            } else {
                setProdutoSelect(response.data.payload);
                setHasError(false)
            }
        }
        catch (ex){
            console.error(ex);
        }
        finally {
            setIsLoading(false);
        }
    };

    const consultarProdutos = async (filtro = "") => {
        try {
            setIsLoading(true);
            const response = await GetProdutosByParametros(filtro);

            if (!response || response.status !== 200) {
                setErrorMessage("Erro ao buscar os produtos!");
                setHasError(true);
                setProdutos([]);
                return false;
            }

            const data = response.data.payload;
            setProdutos(Array.isArray(data) ? data : [data])
            console.log(data)

            setHasError(false);
            return true;

        } 
        catch (ex) {
            console.error(ex);
            setErrorMessage("Erro ao buscar os produtos!");
            setHasError(true);
            setProdutos([]);
            return false;

        } 
        finally {
            setIsLoading(false);
        }
    }

    const cadastrarProdutoPost = async (produto) => {
        try {
            setIsLoading(true);
            const response = await PostAddProduto(produto);

            if (!response || response.status !== 201) {
                setErrorMessage("Erro ao cadastrar o produto!");
                setHasError(true);
                return false;
            }

            setHasError(false);
            return true;
        }
        catch (ex) {
            console.error(ex);
            setErrorMessage("Erro ao cadastrar o produto!");
            setHasError(true);
            return false;
        }
        finally {
            setIsLoading(false);
        }
    }

    const atualizarProdutoCompleto = async (id, produto) => {
        try {
            setIsLoading(true);
            const response = await PutAlterarProduto(id, produto);

            if(!response || response.status !== 200) {
                setErrorMessage("Error ao alterar o produto!");
                setHasError(true);
                return false;
            }

            setHasError(false);
            return true;

        } 
        catch (ex) {
            console.error(ex);
            setErrorMessage("Error ao alterar o produto!");
            setHasError(true);
            return false;

        } 
        finally {
            setIsLoading(false);
        }
    }

    const atualizarProdutoParcial = async (id, produto) => {
        try {
            setIsLoading(true);
            const response = await PatchAtualizarProduto(id, produto);

            if(!response || response.status !== 200) {
                setErrorMessage("Error ao atualizar o produto!");
                setHasError(true);
                return false;
            }

            setHasError(false);
            return true;

        } 
        catch (ex) {
            console.error(ex);
            setErrorMessage("Error ao atualizar o produto!");
            setHasError(true);
            return false;

        } 
        finally {
            setIsLoading(false);
        }
    }

    const deleteProduto = async (id) => {
        try {
            setIsLoading(true);
            const response = await DeleteProduto(id);

            if (!response || response.status !== 200) {
                setErrorMessage("Erro ao excluir o produto!");
                setHasError(true);
                return false;
            }

            setHasError(false);
            return true;

        } 
        catch (ex) {
            console.error(ex);
            setErrorMessage("Error ao excluir o produto!");
            setHasError(true);
            return false;

        } 
        finally {
            setIsLoading(false);
        }
    }

    const values = {
        hasError : hasError,
        isLoading : isLoading,
        produtoSelect : produtoSelect,
        produtos : produtos,
        produtoById : produtoById,
        consultarProdutos : consultarProdutos,
        cadastrarProdutoPost : cadastrarProdutoPost,
        atualizarProdutoCompleto : atualizarProdutoCompleto,
        atualizarProdutoParcial : atualizarProdutoParcial,
        deleteProduto : deleteProduto
    }

    return (
        <ProdutoContext.Provider value = {values}>
            {children}
        </ProdutoContext.Provider>
    )

}