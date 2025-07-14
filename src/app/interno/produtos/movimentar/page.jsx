'use client'

import styles from "./page.module.css";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import Image from 'next/image';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BuscarProdutoModal from "@/components/bigModals/buscarProduto/page";
import AlertModal from "@/components/modals/alertModal/alertModal";
import { ApplicationContext } from '@/context/application.context';

import { useContext, useState, useEffect } from 'react';
import { ProdutoContext } from "@/context/produto.context";

export default function MovimentarEstoque() {
    const [modalOpenBusca, setModalOpenBusca] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const context = useContext(ProdutoContext);
    const applicationContext = useContext(ApplicationContext);
    const [produtos, setProdutos] = useState([]);

    const handleBuscarProduto = () => {
        setModalOpenBusca(true);
    };

    const handleMostrarPop = () => {
        setShowAlertModal(true);
    };

    const aumentarQuantidade = (id) => {
        setProdutos((prev) =>
            prev.map((p) =>
                p.id === id
                    ? { ...p, movimentacao: Number(p.movimentacao ?? 0) + 1 }
                    : p
            )
        );
    };

    const diminuirQuantidade = (id) => {
        setProdutos((prev) =>
            prev.map((p) => {
                if (p.id === id) {
                    const atual = Number(p.movimentacao ?? 0);
                    const estoque = Number(p.quantidade ?? 0);
                    const novaQuantidade = Math.max(atual - 1, -estoque);
                    return { ...p, movimentacao: novaQuantidade };
                }
                return p;
            })
        );
    };

    const removerProduto = (id) => {
        setProdutos((prev) => prev.filter((p) => p.id !== id));
    };

    const handleMovimentar = async () => {
        const movimentarProdutos = produtos
            .filter((p) => p.movimentacao !== 0)
            .map((p) => ({
                idProduto: p.id,
                quantidade: p.movimentacao,
            }));

        if (movimentarProdutos.length === 0) {
            applicationContext.callFail("Nenhuma movimentação a realizar!");
            return;
        }

        const response = await context.movimentarEstoque(movimentarProdutos);

        if (response) {
            handleMostrarPop();
        } else {
            applicationContext.callError("Erro ao movimentar estoque!");
        }
    };

    useEffect(() => {
        const produtosSalvos = localStorage.getItem("produtosMovimentacao");
        if (produtosSalvos) {
            setProdutos(JSON.parse(produtosSalvos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("produtosMovimentacao", JSON.stringify(produtos));
    }, [produtos]);

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
                                    <td>
                                        {Number(produto?.quantidade ?? 0) + Number(produto?.movimentacao ?? 0)}
                                    </td>
                                    <td className={styles.tdQuantity}>
                                        <div className={styles.containerItemQuantity}>
                                            <input
                                                type="number"
                                                className={styles.inputNumber}
                                                value={isNaN(produto.movimentacao) ? 0 : produto.movimentacao}
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
                    <StandardButton
                        callback={handleBuscarProduto}
                        text="ADICIONAR PRODUTO"
                        hoverColor="var(--cyan)"
                    />
                    <StandardButton
                        callback={handleMovimentar}
                        text="MOVIMENTAR PRODUTO"
                        hoverColor="var(--cyan)"
                    />
                </div>
            </BasicScreen>

            <BuscarProdutoModal
                isOpen={modalOpenBusca}
                setIsOpen={setModalOpenBusca}
                callbackConfirmar={(produtosSelecionados) => {
                    setProdutos((prev) => {
                        const novos = produtosSelecionados.filter(
                            (novo) => !prev.find((p) => p.id === novo.id)
                        );
                        return [
                            ...prev,
                            ...novos.map((p) => ({
                                ...p,
                                quantidade: Number(p.quantidade ?? 0),
                                movimentacao: 0,
                            })),
                        ];
                    });
                }}
            />

            <AlertModal
                title="Movimentado"
                text="Movimentação realizada com sucesso!"
                bsIcon="bi-check2-circle"
                isOpen={showAlertModal}
                setIsOpen={setShowAlertModal} />
        </>
    );
}