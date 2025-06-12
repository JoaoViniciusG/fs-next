
"use client";

import { useState, useEffect } from "react";
import PedidoCard from "@/components/componentPedidos/pedidos/pedidos";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import StandardButton from "@/components/buttons/standardButton/standardButton";
import ExcluirPedido from "@/components/bigModals/excluirPedido/page";
import AlertModal from "@/components/modals/alertModal/alertModal";
import * as Icon from "react-feather";
import styles from "./page.module.css";
import { consultarPedidosAsync } from "@/services/pedidos.service";

export default function pageConsultarpedido() {
  const [busca, setBusca] = useState("");
  const [termoBusca, setTermoBusca] = useState(""); // termo usado para buscar via API
  const [pedidos, setPedidos] = useState([]);
  const [modalExcluirPedidoOpen, setModalExcluirPedidoOpen] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

 
useEffect(() => {
  const fetchPedidos = async () => {
    try {
      const filtros = termoBusca ? { nomeCliente: termoBusca } : {};
      const resp = await consultarPedidosAsync(filtros);

      if (resp && resp.data) {
        setPedidos(resp.data.payload);
      } else {
        setPedidos([]);
      }
    } catch {
      setPedidos([]);
    }
  };

  fetchPedidos();
}, [termoBusca]);

  // Função para abrir modal de excluir com pedido selecionado
  function abrirExcluirPedido(pedido) {
    setPedidoSelecionado(pedido);
    setModalExcluirPedidoOpen(true);
  }

  // Função de callback depois de excluir pedido
  const handleExcluirPedido = async () => {
  if (!pedidoSelecionado) return;

  try {
    const res = await fetch(`http://localhost:3001/pedido/delete/${pedidoSelecionado.id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) {
      console.error("Erro ao excluir pedido:", res.status);
      return;
    }

    setPedidos((prev) => prev.filter((p) => p.id !== pedidoSelecionado.id));
    setPedidoSelecionado(null);
    setModalExcluirPedidoOpen(false);
    setShowAlertModal(true);
  } catch (error) {
    console.error("Erro na requisição de exclusão:", error);
  }
};

  // Formatar data para exibir (ex: 10/06/2025)
  function formatarData(dataISO) {
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR");
  }

  // Formatar valor em real (R$)
  function formatarValor(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // Função disparada ao clicar no botão Buscar
  function handleBuscarPedido() {
    setTermoBusca(busca.trim());
  }

  return (
    <>
      <BasicScreen pageTitle="Consultar pedidos">
        <BorderContainer title="Consultar pedidos">
          <div className={styles.div_container_main}>
            <div className={styles.filter_dados}>
              <div className={styles.button_filter}>
                <p className={styles.filter_text}>Filtro: </p>
                <Icon.Filter className={styles.icon_filter} />
              </div>
            </div>

            <div className={styles.container}>
              <InputLabel
                label="Buscar o pedido"
                value={busca}
                setValue={setBusca}
                width="80%"
                style={{ flex: 1 }}
              />
              <StandardButton
                text="BUSCAR PEDIDO"
                hoverColor="var(--cyan)"
                callback={handleBuscarPedido}
              />
            </div>
          </div>
        </BorderContainer>

        <BorderContainer title="Pedidos:">
          <div className={styles.pedidos}>
            {pedidos.length === 0 ? (
              <p>Nenhum pedido encontrado.</p>
            ) : (
              pedidos.map((pedido, index) => (
                <PedidoCard
                  key={pedido.id || index}
                  numeroPedido={String(index + 1).padStart(3, "0")}
                  nomeCliente={pedido.nome}
                  cpfCnpj={pedido.cpf}
                  dataEmissao={formatarData(pedido.data)}
                  valor={formatarValor(pedido.valorTotal)}
                  observacao={pedido.observacao || ""}
                  statusPedido={pedido.statusPedido}
                  onExcluir={() => abrirExcluirPedido(pedido)}
                  idPedido={pedido.id}
                />
              ))
            )}
          </div>
        </BorderContainer>
      </BasicScreen>

      <ExcluirPedido
        isOpen={modalExcluirPedidoOpen}
        setIsOpen={setModalExcluirPedidoOpen}
        callbackCancelar={() => setModalExcluirPedidoOpen(false)}
        callbackConfirmar={handleExcluirPedido}
        bsIcon="bi bi-exclamation-triangle "
        title="Excluir Pedido"
        text="Tem certeza de que deseja excluir este pedido?"
        pedido={pedidoSelecionado}
      />

      <AlertModal
        title="Excluído"
        text="Pedido excluído com sucesso!"
        bsIcon="bi-check2-circle"
        isOpen={showAlertModal}
        setIsOpen={setShowAlertModal}
      />
    </>
  );
}
