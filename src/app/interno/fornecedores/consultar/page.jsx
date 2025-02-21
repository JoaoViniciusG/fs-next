"use client";

import styles from './page.module.css';
import * as Icon from 'react-feather';

import DefaultApplicationButton from "@/components/buttons/defaultApplicationButton/defaultApplicationButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function PageConsultarFornecedores() {
    return (
        <BasicScreen pageTitle="Consultar fornecedores">
            <BorderContainer title="Pesquisar fornecedor:">
                <div className={styles.div_contener_main}>
                    <div className={styles.filter_dados}>
                        <div className={styles.button_filter}>
                            <p className={styles.filter_text}>Filtro: </p>
                            <Icon.Filter className={styles.icon_filter}/>
                        </div>
                    </div>
                    <div className={styles.div_content_busca}>
                        <InputLabel label="Buscar a fornecedor" type="search" placeholder="Pesquise as informações da fornecedor." required={false} readonly={false} width='100vh' />
                        <DefaultApplicationButton text="BUSCAR" hoverColor="var(--cyan)" />
                    </div>
                </div>
            </BorderContainer>
            <BorderContainer title="Fornecedores:">
                <div className={styles.content_table}>
                    <table className={styles.table_fornecedores}>
                        <thead className={styles.table_header}>
                            <tr>
                                <th scope="col">ID Fornecedor</th>
                                <th scope="col">Nome da Empresa</th>
                                <th scope="col">CNPJ</th>
                                <th scope="col">E-mail</th>
                            </tr>
                        </thead>
                        <tbody className={styles.table_body}>
                            <tr>
                                <td>00001</td>
                                <td>Fornecedor 1</td>
                                <td>XX.XXX.XXX/0001.XX</td>
                                <td>example@gmail.com</td>
                            </tr>
                            <tr>
                                <td>00002</td>
                                <td>Fornecedor 2</td>
                                <td>XX.XXX.XXX/0001.XX</td>
                                <td>example@gmail.com</td>
                            </tr>
                            <tr>
                                <td>00003</td>
                                <td>Fornecedor 3</td>
                                <td>XX.XXX.XXX/0001.XX</td>
                                <td>example@gmail.com</td>
                            </tr>
                            <tr>
                                <td>00004</td>
                                <td>Fornecedor 4</td>
                                <td>XX.XXX.XXX/0001.XX</td>
                                <td>example@gmail.com</td>
                            </tr>
                            <tr>
                                <td>00005</td>
                                <td>Fornecedor 5</td>
                                <td>XX.XXX.XXX/0001.XX</td>
                                <td>example@gmail.com</td>
                            </tr>
                            <tr>
                                <td>00006</td>
                                <td>Fornecedor 6</td>
                                <td>XX.XXX.XXX/0001.XX</td>
                                <td>example@gmail.com</td>
                            </tr>
                            <tr>
                                <td>00007</td>
                                <td>Fornecedor 7</td>
                                <td>XX.XXX.XXX/0001.XX</td>
                                <td>example@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BorderContainer>
        </BasicScreen>
    )
}