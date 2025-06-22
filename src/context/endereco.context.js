"use client";

import { DeleteEndereco, GetEnderecoById, PostAddEndereco, GetEnderecoByIdRef, PutAlterarEndereco } from '@/services/endereco.service';
import {
    createContext,
    useState
} from 'react';

export const EnderecoContext = createContext();

export default function EnderecoProvider({ children }) {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [enderecoById, setEnderecoById] = useState(null);
    const [enderecosByRef, setEnderecosByRef] = useState([]);

    const getEndereco = async (id) => {
        try {
            let success = null;
            if (id == undefined) return "Id não informado!";
            setIsLoading(true);

            const response = await GetEnderecoById(id); 

            if (response == false || response.status != 200 ) {
                setEnderecoById(null);
                setHasError(true);
                success = false;
            }
            else {
                setEnderecoById(response.data.payload);
                setHasError(false);
                success = true;
            }
          
            setEnderecosByRef([]);
            return success
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            setIsLoading(false);
        }
    };

    const alterarEndereco = async (endereco) => {
        try {
            let success = null;
            if (endereco == undefined) return "Endereço não informado!";
            setIsLoading(true);

            const response = await PutAlterarEndereco(endereco); 

            if (response == false || response.status != 200 ) {
                setHasError(true)
                success = false;
            }
            else {
                setEnderecoById(null);
                setHasError(false);
                success = true;
            }

            return success;
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            setIsLoading(false);
        }
    };

    const getEnderecos = async (id, tipo) => {
        /*
        1 - IdEmpresa
        2 - IdCliente
        3 - IdFuncionario
        */

        try {
            if (id == undefined || tipo == undefined || isNaN(parseInt(tipo.toString()))) return "Dados informados inválidos!";
            setIsLoading(true);

            let searchOption = "";

            switch (tipo) {
                case 1:
                    searchOption = "idEmpresa";
                    break;
                case 2:
                    searchOption = "idCliente";
                    break;
                case 3:
                    searchOption = "idFuncionario";
                    break;
                default:
                    return "Tipo informado inválido!";
            }

            const response = await GetEnderecoByIdRef(id, searchOption);

            if (response == false || response.status != 200 ) {
                setEnderecosByRef([]);
                setHasError(true);
            }
            else {
                setEnderecosByRef(response.data.payload);
                setHasError(false);
            }

            setEnderecoById([]);
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            setIsLoading(false);
        }
    };

    const addEndereco = async (endereco) => {
        try {
            if (endereco == undefined) return "Endereço não informado!";
            setIsLoading(true);

            const response = await PostAddEndereco(endereco);

            if (response == false || response.status != 200 ) setHasError(true);
            else setHasError(false);
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            setIsLoading(false);
        }
    };

    const deleteEndereco = async (id) => {
        try {
            if (id == undefined) return "Id não informado!";
            setIsLoading(true);

            const response = await DeleteEndereco(id);

            if (response == false || response.status != 200 ) setHasError(true);
            else setHasError(false);
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            setIsLoading(false);
        }
    };

    const values = {
        hasError: hasError,
        isLoading: isLoading,
        enderecoById: enderecoById,
        enderecosByRef: enderecosByRef,
        getEndereco: getEndereco,
        addEndereco: addEndereco,
        getEnderecos: getEnderecos,
        deleteEndereco: deleteEndereco,
        alterarEndereco: alterarEndereco
    }

    return (
        <EnderecoContext.Provider value={values}>
            {children}
        </EnderecoContext.Provider>
    )
}