"use client"

import { createContext, useState, useEffect } from 'react';
import {
  cadastrarFuncionarioAsync,
  editarFuncionarioAsync,
  excluirFuncionarioAsync,
  consultarFuncionariosAsync
} from '@/services/funcionario.service.js';

export const FuncionarioContext = createContext();

export default function FuncionarioProvider({ children }) {
  const [permissoesFuncionarioCadastrar, setPermissoesFuncionarioCadastrar] = useState();
  const [funcionarioCadastrar, setFuncionarioCadastrar] = useState();
  const [funcionarios, setFuncionarios] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const cadastrarFuncionario = async (dadosFuncionario) => {
    setIsLoading(true);
    const response = await cadastrarFuncionarioAsync(dadosFuncionario);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao cadastrar funcionário.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  }

  const editarFuncionario = async (idFuncionario, dadosFuncionario) => {
    setIsLoading(true);
    const response = await editarFuncionarioAsync(idFuncionario, dadosFuncionario);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao editar funcionário.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  }

  const excluirFuncionario = async (idFuncionario) => {
    setIsLoading(true);
    const response = await excluirFuncionarioAsync(idFuncionario);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao excluir funcionário.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  }

  const consultarFuncionarios = async (filtro = {}) => {
    setIsLoading(true);

    const response = await consultarFuncionariosAsync(filtro);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao buscar funcionários.");
      setIsLoading(false);
      return false;
    }

    setFuncionarios(response.data.payload);
    setIsLoading(false);
  };

  const values = {
    funcionarios,
    isError,
    errorMessage,
    isLoading,
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
