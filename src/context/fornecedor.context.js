"use client";

import { GetFornecedorById, GetFornecedorByParametros, PostAddFornecedor, PutAlterarFornecedor, PatchAtualizarFornecedor, DeleteFornecedor } from "@/services/fornecedor.service";
import { createContext, useContext, useState } from "react";
import { ApplicationContext } from "./application.context";

export const FornecedorContext = createContext();

export default function FornecedorProvider ({ children }) {
    const applicationContext = useContext(ApplicationContext);
    const [fornecedorSelect, setFornecedorSelect] = useState(null);
    const [fornecedor, setFornecedor] = useState([]);

    const fornecedorById = async (id) => {
        try {
            if (id == undefined) {
                return `Id não informado!`;
            }
            applicationContext.loadingDefine(true);

            const response = await GetFornecedorById(id);

            if (!response || response.status !== 200) {
                setFornecedorSelect(null);
                applicationContext.callError("Error ao buscar o fornecedor!")
            } else {
                setFornecedorSelect(response.data.payload);
            }
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const consultarFornecedor = async (filtro = "") => {
        try {
            applicationContext.loadingDefine(true);
            const response = await GetFornecedorByParametros(filtro);
    
            if (!response || response.status !== 200) {
                applicationContext.callError("Erro ao buscar os fornecedores!");
                setFornecedor([]);
                return false;
            }

            setFornecedor(Array.isArray(response.data.payload) ? response.data.payload : [response.data.payload]);
            applicationContext.loadingDefine(false);
            return true;
        } 
        catch {
            applicationContext.callError("Erro ao buscar os fornecedores!");
            setFornecedor([]);
            return false;

        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const cadastrarFornecedorPost = async (fornecedor) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await PostAddFornecedor(fornecedor);

            if (response == false || (response.status !== 201 && response.status !== 200)) {
                applicationContext.callError("Erro ao cadastrar o fornecedor!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return true;
        }
        catch {
            applicationContext.callError("Erro ao cadastrar o fornecedor!");
            return false;
        }
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const atualizarFornecedorCompleto = async (id, fornecedor) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await PutAlterarFornecedor(id, fornecedor);

            if(!response || response.status !== 200) {
                applicationContext.callError("Error ao alterar o fornecedor!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return true;

        } 
        catch {
            applicationContext.callError("Error ao alterar o fornecedor!");
            return false;

        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const atualizarFornecedorParcial = async (id, fornecedor) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await PatchAtualizarFornecedor(id, fornecedor);

            if(!response || response.status !== 200) {
                applicationContext.callError("Error ao atualizar o fornecedor!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return true;

        } 
        catch {
            applicationContext.callError("Error ao atualizar o fornecedor!");
            return false;

        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }

    const deleteFornecedor = async (id) => {
        try {
            applicationContext.loadingDefine(true);
            const response = await DeleteFornecedor(id);

            if (!response || response.status !== 200) {
                applicationContext.callError("Erro ao excluir o fornecedor!");
                return false;
            }

            applicationContext.loadingDefine(false);
            return true;
        } 
        catch {
            applicationContext.callError("Error ao excluir o fornecedor!");
            return false;

        } 
        finally {
            applicationContext.loadingDefine(false);
        }
    }    

    const formatarCNPJ = (cnpj) => {
        const numeros = cnpj.replace(/\D/g, '').slice(0, 14);

        return numeros
            .replace(/^(\d{2})(\d)/, '$1.$2')
            .replace(/^(\d{2}).(\d{3})(\d)/, '$1.$2.$3')
            .replace(/.(\d{3})(\d)/, '.$1/$2') 
            .replace(/(\d{4})(\d{1,2})$/, '$1-$2')
    }

    const values = {
        fornecedorSelect : fornecedorSelect,
        fornecedor : fornecedor,
        fornecedorById : fornecedorById,
        consultarFornecedor : consultarFornecedor,
        cadastrarFornecedorPost : cadastrarFornecedorPost,
        atualizarFornecedorCompleto : atualizarFornecedorCompleto,
        atualizarFornecedorParcial : atualizarFornecedorParcial,
        deleteFornecedor : deleteFornecedor,
        formatarCNPJ : formatarCNPJ
    }
    
    return (
        <FornecedorContext.Provider value = {values}>
            {children}
        </FornecedorContext.Provider>
    )

}