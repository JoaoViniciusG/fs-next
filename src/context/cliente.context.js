"use client"

import { createContext, useState, useEffect } from 'react';
import {
  cadastrarClienteAsync,
  editarClienteAsync,
  excluirClienteAsync,
  consultarClientesAsync
} from '@/services/cliente.service.js';

export const ClienteContext = createContext();

export default function ClienteProvider({ children }) {
  const [clientes, setClientes] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cadastrarCliente = async (dadosCliente) => {
    setIsLoading(true);
    const response = await cadastrarClienteAsync(dadosCliente);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao cadastrar cliente.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  }

  const editarCliente = async (idCliente, dadosCliente) => {
    setIsLoading(true);
    const response = await editarClienteAsync(idCliente, dadosCliente);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao editar cliente.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  }

  const excluirCliente = async (idCliente) => {
    setIsLoading(true);
    const response = await excluirClienteAsync(idCliente);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao excluir cliente.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  }

  const consultarClientes = async (filtro = {}) => {
    setIsLoading(true);

    const response = await consultarClientesAsync(filtro);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao buscar clientes.");
      setIsLoading(false);
      return false;
    }

    setClientes(response.data.payload);
    setIsLoading(false);
  };


  const values = {
    clientes,
    isError,
    errorMessage,
    isLoading,
    cadastrarCliente,
    editarCliente,
    excluirCliente,
    consultarClientes
  };

  return (
    <ClienteContext.Provider value={values}>
      {children}
    </ClienteContext.Provider>
  );
}
