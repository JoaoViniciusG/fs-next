// "use client"

// import { getPedidos } from '@/services/pedidos.service';
// import {
//     createContext,
//     useState
// } from 'react';

// export const PedidosContext = createContext();

// export default function PedidosProvider({ children }) {
//     const [pedidos, setPedidos] = useState([]);

//     const receberPedidos = async () => {
//         const response = await getPedidos();

//         if(response == false || response.status != 200) {
//             console.log("Deu erro, corrija essa merda!");
//             return;
//         }

//         setPedidos(response.data.payload);
//     };

//     const values = {
//         pedidos: pedidos,
//         receberPedidos: receberPedidos
//     };

//     return (
//         <PedidosContext.Provider value={values}>
//             { children }
//         </PedidosContext.Provider>
//     );
// }

"use client";
import { createContext, useState, useContext} from "react";
import {
  criarPedidoAsync,
  consultarPedidosAsync,
  excluirPedidoAsync,
  atualizarStatusPedidoAsync} from "@/services/pedidos.service"
export const PedidoContext = createContext();

export default function PedidoProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const criarPedido = async (dadosPedido) => {
    setIsLoading(true);
    const response = await criarPedidoAsync(dadosPedido);

    if (!response || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao criar pedido.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  };

  const consultarPedidos = async (filtros) => {
    setIsLoading(true);
    const response = await consultarPedidosAsync(filtros);

    if (!response || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao buscar pedidos.");
      setIsLoading(false);
      return false;
    }

    setPedidos(response.data);
    setIsLoading(false);
  };

  const excluirPedido = async (idPedido) => {
    setIsLoading(true);
    const response = await excluirPedidoAsync(idPedido);

    if (!response || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao excluir pedido.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  };

  const atualizarStatusPedido = async (idPedido, status) => {
    setIsLoading(true);
    const response = await atualizarStatusPedidoAsync(idPedido, status);

    if (!response || response.status !== 200) {
      setIsError(true);
      setErrorMessage("Erro ao atualizar status do pedido.");
      setIsLoading(false);
      return false;
    }

    setIsLoading(false);
    return true;
  };
  const values = {
    pedidos,
    isLoading,
    isError,
    errorMessage,
    criarPedido,
    consultarPedidos,
    excluirPedido,
    atualizarStatusPedido,
  };

  return (
    <PedidoContext.Provider value={values}>
      {children}
    </PedidoContext.Provider>
  );
}
