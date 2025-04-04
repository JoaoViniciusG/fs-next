'use client'

import styles from "./page.module.css"
import BasicScreen from "@/components/screens/basicScreen/basicScreen"
import React, { useState } from "react";
import Image from 'next/image';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BuscarProdutoModal from "@/components/bigModals/buscarProduto/page";
import AlertModal from "@/components/modals/alertModal/alertModal";

const MovimentarEstoque = () => {
  const [modalOpenBusca, setModalOpenBusca]=useState(false)
  const[showAlertModal, setShowAlertModal]=useState(false)

  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Placa de vídeo RTX 4090 TI", marca: "Nvidia", quantidadeAtual: 25, movimentacao: 0 },
    { id: 2, nome: "Placa de vídeo RTX 4080 TI", marca: "Nvidia", quantidadeAtual: 30, movimentacao: 0 },
    { id: 3, nome: "Placa de vídeo RTX 3070", marca: "Nvidia", quantidadeAtual: 15, movimentacao: 0 },
    { id: 4, nome: "Placa de vídeo RTX 3060", marca: "Nvidia", quantidadeAtual: 40, movimentacao: 0 },
    { id: 5, nome: "Placa de vídeo RTX 3050", marca: "Nvidia", quantidadeAtual: 50, movimentacao: 0 }
  ]);
  const handleMostrarPop=()=>{
    setShowAlertModal(true)
  }
  
  const handleBuscarProduto = () => {
    setModalOpenBusca(true); 
  };


  const aumentarQuantidade = (id) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === id
          ? { ...produto, movimentacao: produto.movimentacao + 1 }
          : produto
      )
    );
  };


  const diminuirQuantidade = (id) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === id
          ? { ...produto, movimentacao: produto.movimentacao - 1 }
          : produto
      )
    );
  };


  const removerProduto = (id) => {
    setProdutos((prevProdutos) =>
      prevProdutos.filter((produto) => produto.id !== id)
    );
  };

  return (
    <>
      <BasicScreen pageTitle="Movimentar estoque">
        <div className={styles.tableContainer}>
          <table className={styles.produtosTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Quantidade Atual</th>
                <th>Movimentação</th>
                <th>Excluir</th>
              </tr>
            </thead>

            <tbody>
    {produtos.map((produto) => (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.marca}</td>
        <td>{produto.quantidadeAtual + produto.movimentacao}</td>
        <td className={styles.tdQuantity}>
          <div className={styles.containerItemQuantity}>
            <input
              type="number"
              className={styles.inputNumber}
              value={produto.movimentacao}
              readOnly
            />
            <div>
              <Image
                src="/img_movimentar/chevron-up.svg"
                alt="Aumentar quantidade"
                width={10}
                height={10}
                onClick={() => aumentarQuantidade(produto.id)}
              />
              <Image
                src="/img_movimentar/chevron-down.svg"
                alt="Diminuir quantidade"
                width={10}
                height={10}
                onClick={() => diminuirQuantidade(produto.id)}
              />
            </div>
          </div>
        </td>
        <td>
          <button
            className={styles.closeButton}
            onClick={() => removerProduto(produto.id)}
          >
            ✖
          </button>
        </td>
      </tr>
    ))}
  </tbody>

          </table>
        </div>
        
        <div className={styles.containerBottomButtons}>
          <StandardButton callback={handleBuscarProduto}  text="ADICIONAR PRODUTO" hoverColor="var(--cyan)" ></StandardButton>
          <StandardButton callback={handleMostrarPop} text="MOVIMENTAR PRODUTO" hoverColor="var(--cyan)"></StandardButton>
        </div>
      
      </BasicScreen>
      <BuscarProdutoModal
         isOpen={modalOpenBusca} 
         setIsOpen={setModalOpenBusca} 
      />
      <AlertModal
         title="Movimentado"
         text="Movimentação realizada com sucesso!"
         bsIcon="bi-check2-circle"
         isOpen={showAlertModal}
         setIsOpen={setShowAlertModal} 

      />

    </>
    
    
  );
};

export default MovimentarEstoque;
