"use client";

import { createContext, useState, useEffect } from 'react';
import { 
  cadastrarMarcaAsync,
  editarMarcaAsync,
  excluirMarcaAsync,
  consultarMarcasAsync
} from '@/services/marca.service.js';

export const MarcaContext = createContext();

export default function MarcaProvider({ children }) {
  const [marcas, setMarcas] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cadastrarMarca = async (dadosMarca) => {
    setIsLoading(true);
    const response = await cadastrarMarcaAsync(dadosMarca);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao cadastrar marca.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  };

  const editarMarca = async (idMarca, dadosMarca) => {
    setIsLoading(true);
    const response = await editarMarcaAsync(idMarca, dadosMarca);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao editar marca.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  };

  const excluirMarca = async (idMarca) => {
    setIsLoading(true);
    const response = await excluirMarcaAsync(idMarca);

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao excluir marca.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  };

  const consultarMarcas = async () => {
    setIsLoading(true);
    const response = await consultarMarcasAsync();

    if (response === false || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao buscar marcas.");
      setIsLoading(false);
      return false;
    }

    setMarcas(response.data);
    setIsLoading(false);
  };

  const values = {
    marcas,
    isError,
    errorMessage,
    isLoading,
    cadastrarMarca,
    editarMarca,
    excluirMarca,
    consultarMarcas
  };

  return (
    <MarcaContext.Provider value={values}>
      {children}
    </MarcaContext.Provider>
  );
}
