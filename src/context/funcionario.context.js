"use client"

import { createContext, useContext, useState } from 'react';
import { ApplicationContext } from './application.context';
import {v4 as uuidv4} from 'uuid';
import {
  cadastrarFuncionarioAsync,
  editarFuncionarioAsync,
  excluirFuncionarioAsync,
  consultarFuncionariosAsync
} from '@/services/funcionario.service.js';

export const FuncionarioContext = createContext();

export default function FuncionarioProvider({ children }) {
  const applicationContext = useContext(ApplicationContext);

  const [permissoesFuncionarioCadastrar, setPermissoesFuncionarioCadastrar] = useState(null);
  const [funcionarioCadastroId, setFuncionarioCadastroId] = useState(null);
  const [funcionarioCadastrar, setFuncionarioCadastrar] = useState({});
  const [funcionarios, setFuncionarios] = useState([]);

  const novoIdFuncionarioCadastrar = (force = false) => {
    if(funcionarioCadastroId != null && !force) return;

    setFuncionarioCadastroId(uuidv4());
    setFuncionarioCadastrar({
      nome: "",
      cpf: "",
      nascimento: "",
      telefone: "",
      email: null,
      sexo: ""
    });
  }

  const cadastrarFuncionario = async () => {
    applicationContext.loadingDefine(true);

    const response = await cadastrarFuncionarioAsync(funcionarioCadastrar);

    if (response === false || response.status !== 200) {
      applicationContext.callError("Erro ao cadastrar funcionário.")
      applicationContext.loadingDefine(false);
      return false;
    }

    console.log("EMAIL: ", funcionarioCadastrar.email == null)
    if(funcionarioCadastrar.email == null) novoIdFuncionarioCadastrar(true);

    applicationContext.loadingDefine(false);
    return true;
  }

  const editarFuncionario = async (idFuncionario, dadosFuncionario) => {
    applicationContext.loadingDefine(true);
    const response = await editarFuncionarioAsync(idFuncionario, dadosFuncionario);

    if (response === false || response.status !== 200) {
      applicationContext.callError("Erro ao editar funcionário.")
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  }

  const excluirFuncionario = async (idFuncionario) => {
    applicationContext.loadingDefine(true);
    const response = await excluirFuncionarioAsync(idFuncionario);

    if (response === false || response.status !== 200) {
      applicationContext.callError("Erro ao excluir funcionário.")
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  }

  const consultarFuncionarios = async (filtro = {}) => {
    applicationContext.loadingDefine(true);

    const response = await consultarFuncionariosAsync(filtro);

    if (response === false || response.status !== 200) {
      applicationContext.callError("Erro ao buscar funcionário.")
      applicationContext.loadingDefine(false);
      return false;
    }

    setFuncionarios(response.data.payload);
    applicationContext.loadingDefine(false);
  };

  const values = {
    funcionarioCadastroId,
    funcionarios,
    novoIdFuncionarioCadastrar,
    cadastrarFuncionario,
    editarFuncionario,
    excluirFuncionario,
    consultarFuncionarios,
    permissoesFuncionarioCadastrar,
    setPermissoesFuncionarioCadastrar,
    funcionarioCadastrar,
    setFuncionarioCadastrar
  };

  return (
    <FuncionarioContext.Provider value={values}>
      {children}
    </FuncionarioContext.Provider>
  );
}
