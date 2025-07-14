"use client";

import { DeleteEndereco, GetEnderecoById, PostAddEndereco, GetEnderecoByIdRef, PutAlterarEndereco, BuscarCEP } from '@/services/endereco.service';
import {
    createContext,
    useContext,
    useState
} from 'react';
import { ApplicationContext } from './application.context';

export const EnderecoContext = createContext();

export default function EnderecoProvider({ children }) {
    const applicationContext = useContext(ApplicationContext);

    const [enderecoById, setEnderecoById] = useState(null);
    const [enderecosByRef, setEnderecosByRef] = useState([]);

    const [cepProperties, setCepProperties] = useState([]);

    const getEndereco = async (id) => {
        try {
            let success = null;
            if (id == undefined) return "Id não informado!";
            applicationContext.loadingPageDefine(true);

            const response = await GetEnderecoById(id); 

            if (response == false || response.status != 200 ) {
                setEnderecoById(null);
                applicationContext.callError("Falha ao buscar endereço!");
                success = false;
            }
            else {
                setEnderecoById(response.data.payload);
                success = true;
            }
          
            setEnderecosByRef([]);
            return success
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            applicationContext.loadingPageDefine(false);
        }
    };

    const alterarEndereco = async (endereco) => {
        try {
            let success = null;
            if (endereco == undefined) return "Endereço não informado!";
            applicationContext.loadingDefine(true);

            const response = await PutAlterarEndereco(endereco); 

            if (response == false || response.status != 200 ) {
                applicationContext.callError("Falha ao alterar endereço!")
                success = false;
            }
            else {
                setEnderecoById(null);
                success = true;
            }

            return success;
        }
        catch (ex) {
            applicationContext.callError("Falha ao alterar endereço!")
        }
        finally {
            applicationContext.loadingDefine(false);
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
            applicationContext.loadingDefine(true);

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
            console.log(response.data);
            if (response == false || response.status != 200 ) {
                setEnderecosByRef([]);
                applicationContext.callError("Falha ao alterar endereços!")
            }
            else {
                setEnderecosByRef(response.data.payload);
            }

            setEnderecoById([]);
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            applicationContext.loadingDefine(false);
        }
    };

    const addEndereco = async (endereco) => {
        try {
            if (endereco == undefined) return "Endereço não informado!";
            applicationContext.loadingDefine(true);

            const response = await PostAddEndereco(endereco);

            if (response == false || response.status != 200 ) {
                applicationContext.callError("Falha ao adicionar endereço!");
                return false;
            }

            return true;
        }
        catch (ex) {
            console.error(ex);
            return false;
        }
        finally {
            applicationContext.loadingDefine(false);
        }
    };

    const deleteEndereco = async (id) => {
        try {
            if (id == undefined) return "Id não informado!";
            applicationContext.loadingDefine(true);

            const response = await DeleteEndereco(id);

            if (response == false || response.status != 200 ) applicationContext.callError("Falha ao excluir endereço!");
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            applicationContext.loadingDefine(false);
        }
    };

    const getCep = async (cep) => {
        try {
            if (cep == undefined) return "CEP não informado!";
            applicationContext.loadingDefine(true);
            const response = await BuscarCEP(cep);
            
            if (response == false || response.status != 200 ) {
                applicationContext.callError("Falha ao buscar CEP!");
                return;
            }

            setCepProperties(response.data);
        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            applicationContext.loadingDefine(false);
        }
    };

    const values = {
        enderecoById,
        enderecosByRef,
        cepProperties,
        getEndereco,
        addEndereco,
        getEnderecos,
        deleteEndereco,
        alterarEndereco,
        getCep
    }

    return (
        <EnderecoContext.Provider value={values}>
            {children}
        </EnderecoContext.Provider>
    )
}