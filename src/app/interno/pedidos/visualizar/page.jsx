"use client";

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css";
import BorderContainer from "@/components/containers/borderContainer/page";
import { useState, useEffect } from "react";
import TextAreaInput from "@/components/inputs/inputLabelObs/inputLabel";
import AddressOption from "@/components/containers/endereco/addressOption";
import { useSearchParams } from "next/navigation";
import TotalSummary from "@/components/componentPedidos/inferior/pedidos";

export default function PageVisualizarPedido() {
  const searchParams = useSearchParams();

  const [nome, setNome] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");

  const [subtotal, setSubtotal] = useState("");
  const [desconto, setDesconto] = useState("");
  const [total, setTotal] = useState("");
  const [observacao, setObservacao] = useState("");
  const [idPedido, setIdPedido] = useState("");

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setNome(searchParams.get("nomeCliente") || "");
    setCpfCnpj(searchParams.get("cpfCnpj") || "");
    setIdPedido(searchParams.get("idPedido") || "");

    const pedidoId = searchParams.get("idPedido") || "";

    if (pedidoId) {
      fetch(`http://localhost:3001/pedido/${pedidoId}/produtos`, {
  credentials: 'include' // envia cookies junto
})
        .then((res) => {
          if (!res.ok) throw new Error("Erro ao buscar produtos");
          return res.json();
        })
        .then((data) => {
          const { produtos, subtotal, valorTotal, desconto, observacao } = data.payload;
          setProdutos(produtos || []);
          setSubtotal(subtotal?.toString() || "");
          setTotal(valorTotal?.toString() || "");
          setDesconto(desconto?.toString() || "");
          setObservacao(observacao || "");
        })
        .catch((error) => {
          console.error("Erro ao carregar produtos:", error);
          setProdutos([]);
        });
    }
  }, [searchParams]);

  return (
    <BasicScreen pageTitle="Informações do pedido">
      <BorderContainer title="Dados do cliente">
        <div className={styles.dvInputs}>
          <div className={styles.linha}>
            <InputLabel
              readonly={true}
              label="Nome:"
              value={nome}
              setValue={setNome}
              width="80%"
              style={{ flex: 1 }}
            />
            <InputLabel
              readonly={true}
              label="CPF/CNPJ:"
              value={cpfCnpj}
              setValue={setCpfCnpj}
              width="80%"
              style={{ flex: 1 }}
            />
          </div>
        </div>
      </BorderContainer>

      <BorderContainer title="Endereço">
        <div className={styles.divEnderecos}>
          <AddressOption />
        </div>
      </BorderContainer>

      <BorderContainer title="Dados do pedido:" className={styles.borderContainer}>
  <table className={styles.fornecedoresTable}>
    <thead>
      <tr>
        <th>Cód. Produto</th>
        <th>Nome do Produto</th>
        <th>Marca</th>
        <th>Quantidade</th>
        <th>Valor Unit.</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      {produtos.length === 0 ? (
        <tr>
          <td colSpan={6} style={{ textAlign: "center" }}>Nenhum produto encontrado</td>
        </tr>
      ) : (
        produtos.map((produto, index) => (
          <tr key={index}>
            <td>{produto.idProduto}</td>
            <td>{produto.nome}</td>
            <td>{produto.nomeMarca}</td>
            <td>{produto.quantidade}</td>
            <td>R$ {Number(produto.valorUnitario).toFixed(2)}</td>
            <td>R$ {Number(produto.subtotal).toFixed(2)}</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
      </BorderContainer>

      <TotalSummary
        subtotal={subtotal}
        desconto={desconto}
        total={total}
        observacao={observacao}
      />

      <div className={styles.baixo}>
        <div className={styles.divTagBottom}>
          <p>Código do pedido:</p>
          <span>N° {idPedido || "000"}</span>
        </div>
      </div>
    </BasicScreen>
  );
}
