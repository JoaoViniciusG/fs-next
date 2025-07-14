"use client";

import { createContext, useState, useContext } from 'react';
import { 
  cadastrarMarcaAsync,
  editarMarcaAsync,
  excluirMarcaAsync,
  consultarMarcaPorParamsAsync
} from '@/services/marca.service.js';
import { ApplicationContext } from './application.context';

export const MarcaContext = createContext();

export default function MarcaProvider({ children }) {
  const applicationContext = useContext(ApplicationContext);
  const [marcas, setMarcas] = useState([]);

  const cadastrarMarca = async (dadosMarca) => {
    applicationContext.loadingDefine(true);
    const response = await cadastrarMarcaAsync(dadosMarca);

    if (response === false || response.status !== 200) {
      applicationContext.callError("Erro ao cadastrar marca.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  };

  const editarMarca = async (idMarca, dadosMarca) => {
    applicationContext.loadingDefine(true);
    const response = await editarMarcaAsync(idMarca, dadosMarca);

    if (response === false || response.status !== 200) {
      applicationContext.callError("Erro ao editar marca.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  };

  const excluirMarca = async (idMarca) => {
    applicationContext.loadingDefine(true);
    const response = await excluirMarcaAsync(idMarca);

    if (response === false || response.status !== 200) {
      applicationContext.callError("Erro ao excluir marca.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  };

  const consultarMarcas = async (filtro = {}) => {
    applicationContext.loadingDefine(true);

    const response = await consultarMarcaPorParamsAsync(filtro);

    if (response === false || response.status !== 200) {
      applicationContext.callError("Erro ao buscar marcas.");
      applicationContext.loadingDefine(false);
      return false;
    }

    setMarcas(response.data.payload);
    applicationContext.loadingDefine(false);
  };

  const values = {
    marcas,
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
