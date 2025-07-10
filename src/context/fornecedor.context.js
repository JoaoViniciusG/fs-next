"use client";

import { GetFornecedorById, GetFornecedorByParametros, PostAddFornecedor, PutAlterarFornecedor, PatchAtualizarFornecedor, DeleteFornecedor } from "@/services/fornecedor.service";
import { createContext, useState } from "react";

export const FornecedorContext = createContext();

export default function FornecedorProvider ({ children }) {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fornecedorSelect, setFornecedorSelect] = useState(null);
    const [fornecedor, setFornecedor] = useState([]);

    const fornecedorById = async (id) => {
        try {
            if (id == undefined) {
                return `Id não informado!`;
            }
            setIsLoading(true);

            const response = await GetFornecedorById(id);

            if (!response || response.status !== 200) {
                setFornecedorSelect(null);
                setErrorMessage("Error ao buscar o fornecedor!")
                setHasError(true);
            } else {
                setFornecedorSelect(response.data.payload);
                setHasError(false)
            }

        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            setIsLoading(false);
        }
    }

    const consultarFornecedor = async (filtro = {}) => {
        try {
            setIsLoading(true);
            const response = await GetFornecedorByParametros(filtro);
    
            if (!response || response.status !== 200) {
                setErrorMessage("Erro ao buscar os fornecedores!");
                setHasError(true);
                setFornecedor([]);
                return false;
            }
    
            const data = response.data;
    
            if (Array.isArray(data)) {
                setFornecedor(data);
            }
            else if (data.payload && Array.isArray(data.payload)) {
                setFornecedor(data.payload);
            }
            else {
                setFornecedor([]);
            }
    
            setHasError(false);
            return true;
    
        } 
        catch (ex) {
            console.error(ex);
            setErrorMessage("Erro ao buscar os fornecedores!");
            setHasError(true);
            setFornecedor([]);
            return false;

        } 
        finally {
            setIsLoading(false);
        }
    }

    const cadastrarFornecedorPost = async (fornecedor) => {
        try {
            setIsLoading(true);
            const response = await PostAddFornecedor(fornecedor);

            if (!response || response.status !== 201) {
                setErrorMessage("Erro ao cadastrar o fornecedor!");
                setHasError(true);
                return false;
            }

            setHasError(false);
            return true;
        }
        catch (ex) {
            console.error(ex);
            setErrorMessage("Erro ao cadastrar o fornecedor!");
            setHasError(true);
            return false;
        }
        finally {
            setIsLoading(false);
        }
    }

    const atualizarFornecedorCompleto = async (id, fornecedor) => {
        try {
            setIsLoading(true);
            const response = await PutAlterarFornecedor(id, fornecedor);

            if(!response || response.status !== 200) {
                setErrorMessage("Error ao alterar o fornecedor!");
                setHasError(true);
                return false;
            }

            setHasError(false);
            return true;

        } 
        catch (ex) {
            console.error(ex);
            setErrorMessage("Error ao alterar o fornecedor!");
            setHasError(true);
            return false;

        } 
        finally {
            setIsLoading(false);
        }
    }

    const atualizarFornecedorParcial = async (id, fornecedor) => {
        try {
            setIsLoading(true);
            const response = await PatchAtualizarFornecedor(id, fornecedor);

            if(!response || response.status !== 200) {
                setErrorMessage("Error ao atualizar o fornecedor!");
                setHasError(true);
                return false;
            }

            setHasError(false);
            return true;

        } 
        catch (ex) {
            console.error(ex);
            setErrorMessage("Error ao atualizar o fornecedor!");
            setHasError(true);
            return false;

        } 
        finally {
            setIsLoading(false);
        }
    }

    const deleteFornecedor = async (id) => {
        try {
            setIsLoading(true);
            const response = await DeleteFornecedor(id);

            if (!response || response.status !== 200) {
                setErrorMessage("Erro ao excluir o fornecedor!");
                setHasError(true);
                return false;
            }

            setHasError(false);
            return true;

        } 
        catch (ex) {
            console.error(ex);
            setErrorMessage("Error ao excluir o fornecedor!");
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
        fornecedorSelect : fornecedorSelect,
        fornecedor : fornecedor,
        fornecedorById : fornecedorById,
        consultarFornecedor : consultarFornecedor,
        cadastrarFornecedorPost : cadastrarFornecedorPost,
        atualizarFornecedorCompleto : atualizarFornecedorCompleto,
        atualizarFornecedorParcial : atualizarFornecedorParcial,
        deleteFornecedor : deleteFornecedor
    }
    
    return (
        <FornecedorContext.Provider value = {values}>
            {children}
        </FornecedorContext.Provider>
    )

}