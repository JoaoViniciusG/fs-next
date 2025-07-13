"use client";

import styles from './page.module.css';
import * as Icon from 'react-feather';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

import { useRouter } from 'next/navigation';
import { FornecedorContext } from '@/context/fornecedor.context';
import { useContext, useEffect, useState } from 'react';
import { useDebounce } from '@/app/hooks/useDebounce';

export default function PageConsultarFornecedores() {
    const router = useRouter();
    const context = useContext(FornecedorContext);
    const [filtro, setFiltro] = useState("");

    const filtroDebounce = useDebounce(filtro);

    useEffect(() => {
        context.consultarFornecedor(filtroDebounce);
    }, [filtroDebounce]);

    return (
        <BasicScreen pageTitle="Consultar fornecedores">
            <BorderContainer title="Consultar Fornecedor:">
                <div className={styles.div_contener_main}>
                    <div className={styles.filter_dados}>
                        <div className={styles.button_filter}>
                            <p className={styles.filter_text}>Filtro: </p>
                            <Icon.Filter className={styles.icon_filter}/>
                        </div>
                    </div>
                    <div className={styles.div_content_busca}>
                        <InputLabel value={filtro} setValue={setFiltro} label="Buscar a fornecedor" type="search" placeholder="Pesquise as informações da fornecedor." required={false} readonly={false} width='100vh'/>
                    </div>
                </div>
            </BorderContainer>
            <BorderContainer title="Fornecedores:">
                <div className={styles.content_table}>
                    <table className={styles.table_fornecedores}>
                        <thead className={styles.table_header}>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome da Empresa</th>
                                <th scope="col">CNPJ</th>
                                <th scope="col">E-mail</th>
                            </tr>
                        </thead>
                        <tbody className={styles.table_body}>
                            {context.fornecedor.length === 0 ? (
                                <tr>
                                    <td colSpan={5} style={{ textAlign: "center" }}>Nenhum fornecedor encontrado</td>
                                </tr>
                            ) : (
                                context.fornecedor.map((fornecedor) => (
                                    <tr key={fornecedor.id} onClick={() => router.push(`/interno/fornecedores/visualizar/${fornecedor.id}`)}>
                                        <td>{fornecedor.id}</td>
                                        <td>{fornecedor.razaoSocial}</td>
                                        <td>{context.formatarCNPJ(fornecedor.cnpj)}</td>
                                        <td>{fornecedor.email}</td>
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