'use client'

import React, { useState, useEffect } from "react";
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css";
import BorderContainer from "@/components/containers/borderContainer/page";
import AlertModal from "@/components/modals/alertModal/alertModal";
import BuscarClienteModal from "@/components/bigModals/buscarClienteModal/page";
import AdicionarProdutoModal from "@/components/bigModals/addProdutoModal/page";
import ExcluirProduto from "@/components/bigModals/excluirProdutoModal/page";
import TotalSummary from "@/components/componentPedidos/inferior/pedidos";
import Footer from "@/components/componentPedidos/footerPedidos/footer";
import AddAddressButton from "@/components/buttons/addAddressButton/addAddressButton";
import AddressOption from "@/components/containers/endereco/addressOption";

export default function PageCriarPedidos() {
  const [busca, setBusca] = useState('');

  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [produtoSelecionadoIndex, setProdutoSelecionadoIndex] = useState(null);
  const produtoSelecionado = produtoSelecionadoIndex !== null ? produtosSelecionados[produtoSelecionadoIndex] : null;

  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const [modalOpenn, setModalOpenn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAdicionarProdutoOpen, setModalAdicionarProdutoOpen] = useState(false);
  const [modalAlterarProdutoOpen, setModalAlterarProdutoOpen] = useState(false);
  const [modalExcluirProdutoOpen, setModalExcluirProdutoOpen] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showAlertModalExcluido, setShowAlertModalExcluido] = useState(false);

  const [subtotal, setSubtotal] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [total, setTotal] = useState(0);

  const [produtoEditando, setProdutoEditando] = useState(null);

  const calcularSubtotalProduto = (produto) => {
    const quantidade = Number(produto.quantidade) || 0;
    const valorUnitario = Number(produto.valorUnitario) || 0;
    return quantidade * valorUnitario;
  };

  
  useEffect(() => {
    const novoSubtotal = produtosSelecionados.reduce(
      (acc, produto) => acc + calcularSubtotalProduto(produto), 0
    );
    setSubtotal(novoSubtotal);
    setTotal(novoSubtotal - Number(desconto || 0));
  }, [produtosSelecionados, desconto]);

  const adicionarProdutoNaLista = (produto) => {
    setProdutosSelecionados((prev) => {
      const index = prev.findIndex(p => p.codigo === produto.codigo);
      if (index !== -1) {
        const novosProdutos = [...prev];
        novosProdutos[index].quantidade =
          Number(novosProdutos[index].quantidade) + Number(produto.quantidade || 1);
        return novosProdutos;
      } else {
        return [...prev, { ...produto, quantidade: Number(produto.quantidade || 1) }];
      }
    });
    setModalAdicionarProdutoOpen(false);
  };

  const atualizarProdutoNaLista = (produtoAtualizado) => {
    if (produtoSelecionadoIndex === null) return;
    setProdutosSelecionados((prev) => {
      const novaLista = [...prev];
      novaLista[produtoSelecionadoIndex] = { ...produtoAtualizado };
      return novaLista;
    });
    setProdutoSelecionadoIndex(null);
    setProdutoEditando(null);
    setModalAlterarProdutoOpen(false);
    setShowAlertModal(true);
  };

  const handleExcluirProduto = () => {
    if (produtoSelecionadoIndex !== null) {
      setProdutosSelecionados((prev) =>
        prev.filter((_, i) => i !== produtoSelecionadoIndex)
      );
    }
    setModalExcluirProdutoOpen(false);
    setShowAlertModalExcluido(true);
    setProdutoSelecionadoIndex(null);
  };

  const handleCreatePedido = async () => {
    if (!clienteSelecionado) {
      alert('Por favor, selecione um cliente antes de criar o pedido.');
      return;
    }
    if (!clienteSelecionado.idEndereco) {
      alert('Por favor, selecione um endereço para o cliente.');
      return;
    }
    if (produtosSelecionados.length === 0) {
      alert('Adicione pelo menos um produto ao pedido.');
      return;
    }

    const pedido = {
      idCliente: clienteSelecionado.id,
      idEndereco: clienteSelecionado.idEndereco,
      data: new Date().toISOString(),
      valorTotal: subtotal,
      desconto: Number(desconto),
      observacao: '',
      idFuncionario: 'b36abef5-283f-11f0-817d-0242ac120018',
      status: 1,
      produtos: produtosSelecionados.map(produto => ({
        idProduto: produto.id,
        quantidade: Number(produto.quantidade),
      })),
    };

    try {
      const response = await fetch('http://localhost:3001/pedido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pedido),
      });

      if (!response.ok) throw new Error('Erro ao criar pedido');

      setModalOpen(true);
      setProdutosSelecionados([]);
      setClienteSelecionado(null);
      setDesconto(0);
      setBusca('');
    } catch (error) {
      alert(`Erro ao criar pedido: ${error.message}`);
    }
  };

  const handleConfirmClick = () => {
    handleCreatePedido();
  };

  const handleConsultar = () => {
    console.log("Consultando cliente...");
  };

  const handleConfirmarBuscarCliente = (cliente) => {
    setClienteSelecionado(cliente);
    setBusca('');
    setModalOpenn(false);
  };

  return (
    <>
      <BasicScreen pageTitle="Criar pedido">
        <BorderContainer title="Dados do cliente">
          <div className={styles.dvInputs}>
            <InputLabel
              label="Buscar cliente"
              value={clienteSelecionado ? clienteSelecionado.nome : busca}
              setValue={(val) => {
                setBusca(val);
                setClienteSelecionado(null);
              }}
              showLupa={true}
              width="70%"
              style={{ flex: 1 }}
              onClick={() => setModalOpenn(true)}
            />
          </div>
        </BorderContainer>

        <BorderContainer title="Endereço">
          <div className={styles.divEnderecos}>
            <AddAddressButton />
            <AddressOption
              clienteId={clienteSelecionado ? clienteSelecionado.id : null}
              onSelectEndereco={(idEndereco) => {
              setClienteSelecionado((prev) => {
                const novoCliente = prev ? { ...prev, idEndereco } : prev;
                console.log("Cliente com endereço selecionado:", novoCliente);
                return novoCliente;
              });
            }}
            />
          </div>
        </BorderContainer>

        <BorderContainer title="Dados do pedido:" className={styles.borderContainer}>
          <div className={styles.containerDataMaster}>
            <div className={styles.containerHeaderListOptions}>
              <StandardButton
                className={styles.buttonHeaderOptions}
                text="ADICIONAR PRODUTO"
                hoverColor="var(--cyan)"
                callback={() => setModalAdicionarProdutoOpen(true)}
              />
              <StandardButton
                className={styles.buttonHeaderOptions}
                text="ALTERAR PRODUTO"
                hoverColor="var(--cadetblue-ligtht)"
                callback={() => {
                  if (produtoSelecionadoIndex !== null) {
                    const produtoSelecionado = produtosSelecionados[produtoSelecionadoIndex];
                    setProdutoEditando(produtoSelecionado);
                    setModalAlterarProdutoOpen(true);
                  } else {
                    alert("Selecione um produto antes de alterar.");
                  }
                }}
              />
              <StandardButton
                className={styles.buttonHeaderOptions}
                text="EXCLUIR PRODUTO"
                hoverColor="var(--darkred)"
                callback={() => {
                  if (produtoSelecionadoIndex !== null) {
                    setModalExcluirProdutoOpen(true);
                  }
                }}
              />
            </div>

            {/* <div className={styles.tableProducts}>
              <div className={styles.headerListProducts}>
                <p className={styles.listHeaderTitle}>Cód. do Produto</p>
                <p className={styles.listHeaderTitle}>Nome do Produto / Modelo</p>
                <p className={styles.listHeaderTitle}>Marca</p>
                <p className={styles.listHeaderTitle}>Quantidade</p>
                <p className={styles.listHeaderTitle}>Valor Unit.</p>
                <p className={styles.listHeaderTitle}>Subtotal</p>
              </div>

              <div className={styles.divTableContainerContent}>
                <div>
                  <hr className={styles.hrBorder} style={{ left: '15%' }} />
                  <hr className={styles.hrBorder} style={{ left: '45%' }} />
                  <hr className={styles.hrBorder} style={{ left: '55%' }} />
                  <hr className={styles.hrBorder} style={{ left: '75%' }} />
                  <hr className={styles.hrBorder} style={{ left: '87%' }} />
                </div>
                <table className={styles.tableContainerContent}>
                  <tbody>
                    {produtosSelecionados.length === 0 && (
                      <tr>
                        <td colSpan={6} style={{ textAlign: "center" }}>
                          Nenhum produto adicionado
                        </td>
                      </tr>
                    )}
                    {produtosSelecionados.map((produto, index) => {
                      const valorUnitario = Number(produto.valorUnitario) || 0;
                      const quantidade = Number(produto.quantidade) || 0;
                      const subtotal = valorUnitario * quantidade;

                      return (
                        <tr
                          key={index}
                          className={produtoSelecionadoIndex === index ? styles.selectedRow : ''}
                          onClick={() => setProdutoSelecionadoIndex(index)}
                        >
                          <td>{produto.id}</td>
                          <td>{produto.nome}</td>
                          <td>{produto.marca}</td>
                          <td>{quantidade}</td>
                          <td>{valorUnitario.toFixed(2)}</td>
                          <td>{subtotal.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div> */}




          <table className={styles.fornecedoresTable}>
            <thead>
              <tr>
                <th>Cód. Produto</th>
                <th>Nome do Produto / Modelo</th>
                <th>Marca</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {produtosSelecionados.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center" }}>
                    Nenhum produto adicionado
                  </td>
                </tr>
              )}
              {produtosSelecionados.map((produto, index) => {
                const valorUnitario = Number(produto.valorUnitario) || 0;
                const quantidade = Number(produto.quantidade) || 0;
                const subtotal = valorUnitario * quantidade;

                return (
                  <tr
                    key={index}
                    className={produtoSelecionadoIndex === index ? styles.selectedRow : ""}
                    onClick={() => setProdutoSelecionadoIndex(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.marca}</td>
                    <td>{quantidade}</td>
                    <td>{valorUnitario.toFixed(2)}</td>
                    <td>{subtotal.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>




          </div>
        </BorderContainer>

        <TotalSummary
          subtotal={subtotal.toFixed(2)}
          desconto={desconto.toFixed(2)}
          total={total.toFixed(2)}
          setSubtotal={setSubtotal}
          setDesconto={setDesconto}
          setTotal={setTotal}
        />
        <Footer
          buttons={[
            { text: "CRIAR PEDIDO", hoverColor: "var(--cyan)", callback: handleConfirmClick },
          ]}
        />
      </BasicScreen>

      {/* Modais */}
      <AlertModal
        title="Criado"
        text="Pedido criado com sucesso!"
        bsIcon="bi-check2-circle"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      />

      <AlertModal
        title="Alterado"
        text="Alterado com sucesso!"
        bsIcon="bi-check2-circle"
        isOpen={showAlertModal}
        setIsOpen={setShowAlertModal}
      />

      <AlertModal
        title="Excluído"
        text="Produto excluído com sucesso!"
        bsIcon="bi-check2-circle"
        isOpen={showAlertModalExcluido}
        setIsOpen={setShowAlertModalExcluido}
      />

      <BuscarClienteModal
        isOpen={modalOpenn}
        setIsOpen={setModalOpenn}
        callbackConsultar={handleConsultar}
        callbackConfirmar={handleConfirmarBuscarCliente}
      />

      <AdicionarProdutoModal
        isOpen={modalAdicionarProdutoOpen}
        setIsOpen={setModalAdicionarProdutoOpen}
        title="Adicionar produto"
        onSelecionarProduto={adicionarProdutoNaLista}
      />

      <AdicionarProdutoModal
        isOpen={modalAlterarProdutoOpen}
        setIsOpen={setModalAlterarProdutoOpen}
        title="Alterar produto"
        produtoEditando={produtoEditando}
        onSelecionarProduto={atualizarProdutoNaLista}
      />

      <ExcluirProduto
        isOpen={modalExcluirProdutoOpen}
        setIsOpen={setModalExcluirProdutoOpen}
        callbackConfirmar={handleExcluirProduto}
        title="AVISO"
        bsIcon="bi bi-exclamation-triangle"
        text="Tem certeza de deseja excluir esse produto da lista?"
        produto={produtoSelecionado}
      />
    </>
  );
}
