"use client";

import { GetProdutoById, GetProdutoByName, GetProdutoByQuantidade, GetProdutoByValorUnitario, GetProdutoByMarca, GetProdutoByIdEmpresa, PostAddProduto, PutAlterarProduto, PatchAtualizarProduto, DeleteProduto, PostMovimentarEstoque } from "@/services/produto.service";

import { createContext, useState } from "react";

export const ProdutoContext = createContext();

export default function ProdutoProvider({ children }) {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [produtoById, setProdutoById] = useState(null);
    

    const getProdutoId = async (id) => {
        try {
            if (id == undefined) {
                return `Id não informado!`;
            }
            setIsLoading(true);

            const response = await GetProdutoById(id);

            if (!response || response.status !== 200) {
                setProdutoById(null);
                setErrorMessage("Error ao buscar o produto!")
                setHasError(true);
            } else {
                setProdutoById(response.data.payload);
                setHasError(false)
            }
        }
        catch (ex){
            console.error(ex);
        }
        finally {
            setIsLoading(false);
        }
    }

    const valores = {
        hasError : hasError,
        isLoading : isLoading,
        produtoById : produtoById,
        getProdutoId : getProdutoId
    }

    return (
        <ProdutoContext.Provider value = {values}>
            {children}
        </ProdutoContext.Provider>
    )

}