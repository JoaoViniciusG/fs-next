"use client";

import styles from './page.module.css';
import * as Icon from 'react-feather';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

import { useRouter } from 'next/navigation';
import { ProdutoContext } from '@/context/produto.context';
import { useContext, useEffect, useState } from 'react';

export default function PageConsultarProdutos() {
    const router = useRouter();
    const context = useContext(ProdutoContext);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        context.consultarProdutos();
    }, []);

    const buscarProdutosFiltro = () => {
        const parans = {};
        if (filtro.trim() !== "") {
            parans.nome = filtro;
        }
        context.consultarProdutos(parans);
    }

    return (
        <BasicScreen pageTitle="Consultar produtos">
            <BorderContainer title="Consultar Produtos:">
                <div className={styles.div_contener_main}>
                    <div className={styles.filter_dados}>
                        <div className={styles.button_filter}>
                            <p className={styles.filter_text}>Filtro: </p>
                            <Icon.Filter className={styles.icon_filter} />
                        </div>
                    </div>
                    <div className={styles.div_content_busca}>
                        <InputLabel label="Buscar o produto" type="search" value={filtro} setValue={setFiltro} placeholder="Pesquise as informações do produto" required={false} readonly={false} width='100vh' />
                        <StandardButton text="BUSCAR" hoverColor="var(--cyan)" callback={buscarProdutosFiltro} />
                    </div>
                </div>
            </BorderContainer>
            <BorderContainer title="Produtos:">
                <div className={styles.content_table}>
                    <table className={styles.table_fornecedores}>
                        <thead className={styles.table_header}>
                            <tr>
                                <th scope="col">Cód. do Produto</th>
                                <th scope="col">Nome do Produto / Modelo</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Valor/un</th>
                            </tr>
                        </thead>
                        <tbody className={styles.table_body}>
                            {context.produtos.length === 0 ? (
                                <tr>
                                    <td colSpan={5} style={{ textAlign: "center" }}>Nenhum produto encontrado</td>
                                </tr>
                            ) : (
                                context.produtos.map((produto) => (
                                    <tr key={produto.id} onClick={() => router.push(`/interno/produtos/visualizar/${produto.id}`)}>
                                        <td>{produto.id}</td>
                                        <td>{produto.nome}</td>
                                        <td>{produto.marca}</td>
                                        <td>{produto.quantidade}</td>
                                        <td>R$ {Number(produto.valorUnitario).toFixed(2)}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </BorderContainer>
        </BasicScreen>
    )
}