"use client"

import { createContext, useState, useEffect, useContext } from 'react';
import {
  cadastrarClienteAsync,
  editarClienteAsync,
  excluirClienteAsync,
  consultarClientesAsync
} from '@/services/cliente.service.js';
import { ApplicationContext } from './application.context';

export const ClienteContext = createContext();

export default function ClienteProvider({ children }) {
  const applicationContext = useContext(ApplicationContext);
  const [clientes, setClientes] = useState([]);

  const cadastrarCliente = async (dadosCliente) => {
    applicationContext.loadingDefine(true);
    const response = await cadastrarClienteAsync(dadosCliente);

    if (response === false || response.status !== 200) {
      setIsError(true);
      applicationContext.callError("Erro ao cadastrar cliente.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  }

  const editarCliente = async (idCliente, dadosCliente) => {
    applicationContext.loadingDefine(true);
    const response = await editarClienteAsync(idCliente, dadosCliente);

    if (response === false || response.status !== 200) {
      setIsError(true);
      applicationContext.callError("Erro ao editar cliente.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  }

  const excluirCliente = async (idCliente) => {
    applicationContext.loadingDefine(true);
    const response = await excluirClienteAsync(idCliente);

    if (response === false || response.status !== 200) {
      setIsError(true);
      applicationContext.callError("Erro ao excluir cliente.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  }

  const consultarClientes = async (filtro = {}) => {
    applicationContext.loadingDefine(true);

    const response = await consultarClientesAsync(filtro);

    if (response === false || response.status !== 200) {
      setIsError(true);
      applicationContext.callError("Erro ao buscar clientes.");
      applicationContext.loadingDefine(false);
      return false;
    }

    setClientes(response.data.payload);
    applicationContext.loadingDefine(false);
  };


  const values = {
    clientes,
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
