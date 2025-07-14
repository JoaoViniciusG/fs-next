"use client";
import { createContext, useState, useContext} from "react";
import {
  criarPedidoAsync,
  consultarPedidosAsync,
  excluirPedidoAsync,
  atualizarStatusPedidoAsync} from "@/services/pedidos.service"
import { ApplicationContext } from "./application.context";

export const PedidoContext = createContext();

export default function PedidoProvider({ children }) {
  const applicationContext = useContext(ApplicationContext);
  const [pedidos, setPedidos] = useState([]);

  const criarPedido = async (dadosPedido) => {
    applicationContext.loadingDefine(true);
    const response = await criarPedidoAsync(dadosPedido);

    if (!response || response.status !== 200) {
      applicationContext.callError("Erro ao criar pedido.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  };

  const consultarPedidos = async (filtros) => {
    applicationContext.loadingDefine(true);
    const response = await consultarPedidosAsync(filtros);

    if (!response || response.status !== 200) {
      applicationContext.callError("Erro ao buscar pedidos.");
      applicationContext.loadingDefine(false);
      return false;
    }

    setPedidos(response.data);
    applicationContext.loadingDefine(false);
  };

  const excluirPedido = async (idPedido) => {
    applicationContext.loadingDefine(true);
    const response = await excluirPedidoAsync(idPedido);

    if (!response || response.status !== 200) {
      applicationContext.callError("Erro ao excluir pedido.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  };

  const atualizarStatusPedido = async (idPedido, status) => {
    applicationContext.loadingDefine(true);
    const response = await atualizarStatusPedidoAsync(idPedido, status);

    if (!response || response.status !== 200) {
      applicationContext.callError("Erro ao atualizar status do pedido.");
      applicationContext.loadingDefine(false);
      return false;
    }

    applicationContext.loadingDefine(false);
    return true;
  };

  const values = {
    pedidos,
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
