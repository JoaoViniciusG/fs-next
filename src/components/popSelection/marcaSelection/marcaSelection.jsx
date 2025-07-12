"use client";

import styles from './marcaSelection.module.css';
import * as Icon from 'react-feather';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

import { useContext, useEffect, useState } from "react";
import { MarcaContext } from "@/context/marca.context";

export default function MarcaSelection({
    title,
    textInputTitle,
    textPlaceholder,
    textBtnBuscar,
    titleTable,
    colun1,
    colun2,
    colun3,
    colun4,
    isOpen = true,
    width = "max-content",
    setIsOpen = () => { },
    setMarca = () => { }
}) {

    const context = useContext(MarcaContext);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        if (isOpen) {
            context.consultarMarcas();
        }
    }, [isOpen]);

    const buscarMarcas = () => {
        context.consultarMarcas(filtro);
    }

    const selecionarMarca = (nome) => {
        setMarca(nome);
        setIsOpen(false);
    };

    return (
        <div style={{ display: (isOpen) ? "flex" : "none" }} className={styles.backgroundContainer}>
            <div style={{ width: width }} className={styles.content_pop_consultar}>
                <div className={styles.contener_close_pop}>
                    <Icon.X onClick={() => { setIsOpen(false) }} className={styles.icon_fechar} />
                </div>
                <BorderContainer title={title}>
                    <div className={styles.div_contener_main}>
                        <div className={styles.filter_dados}>
                            <div className={styles.button_filter}>
                                <p className={styles.filter_text}>Filtro: </p>
                                <Icon.Filter className={styles.icon_filter} />
                            </div>
                        </div>
                        <div className={styles.div_content_busca}>
                            <InputLabel label={textInputTitle} type="search" value={filtro} setValue={setFiltro} placeholder={textPlaceholder} required={false} readonly={false} width='70vh' />
                            <StandardButton text={textBtnBuscar} hoverColor="var(--cyan)" callback={buscarMarcas} />
                        </div>
                    </div>
                </BorderContainer>
                <BorderContainer title={titleTable}>
                    <div className={styles.content_table}>
                        <table className={styles.table_fornecedores}>
                            <thead className={styles.table_header}>
                                <tr>
                                    <th scope="col">{colun1}</th>
                                    <th scope="col">{colun2}</th>
                                    <th scope="col">{colun3}</th>
                                    <th scope="col">{colun4}</th>
                                </tr>
                            </thead>
                            <tbody className={styles.table_body}>
                                {context.isLoading ? (
                                    <tr>
                                        <td colSpan="4">Carregando...</td>
                                    </tr>
                                ) : context.marcas && context.marcas.length > 0 ? (
                                    context.marcas.map((marca) => (
                                        <tr key={marca.idMarca+"_"+marca.idFornecedor} onClick={() => selecionarMarca(marca.nomeMarca)}>
                                            <td>{marca.idMarca}</td>
                                            <td>{marca.razaoSocial}</td>
                                            <td>{marca.nomeMarca}</td>
                                            <td>{marca.cnpj}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">Nenhuma marca encontrada.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </BorderContainer>
            </div>
        </div>
    );
}