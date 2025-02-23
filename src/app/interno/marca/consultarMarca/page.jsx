"use client";

import styles from './page.module.css';
import * as Icon from 'react-feather';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import BorderContainerTable from '@/components/containers/borderContainerTable/page';

export default function PageConsultarMarca() {
    return (
        <BasicScreen pageTitle="Consultar marcas">
            <BorderContainer title="Pesquisar marcas:">
                <div className={styles.div_contener_main}>
                    <div className={styles.filter_dados}>
                        <div className={styles.button_filter}>
                            <p className={styles.filter_text}>Filtro: </p>
                            <Icon.Filter className={styles.icon_filter} />
                        </div>
                    </div>
                    <div className={styles.div_content_busca}>
                        <InputLabel label="Buscar a marca:" type="search" placeholder="Nome da marca" required={false} readonly={false} width='100vh' />
                        <StandardButton text="BUSCAR" hoverColor="var(--cyan)" />
                    </div>
                </div>
            </BorderContainer>
            <BorderContainerTable title = 'Marcas'>
                <div className={styles.content_table}>
                    <table className={styles.table_fornecedores}>
                        <thead className={styles.table_header}>
                            <tr>
                                <th scope="col">Nome da marca</th>
                                <th scope="col">Fornecedor</th>
                                <th scope="col">CNPJ</th>
                            </tr>
                        </thead>
                        <tbody className={styles.table_body}>
                            <tr>
                                <td>HP</td>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>
                            </tr>
                            <tr>
                                <td>Vaio</td>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>
                            </tr>
                            <tr>
                                <td>Apple</td>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>
                            </tr>
                            <tr>
                                <td>Asus</td>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>
                            </tr>
                            <tr>
                                <td>Samsung</td>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>
                            </tr>
                            <tr>
                                <td>Sony</td>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>
                            </tr>
                            <tr>
                                <td>Dell</td>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>   
                            </tr>
                        </tbody>
                    </table>
                </div>
                </BorderContainerTable> 
        </BasicScreen>
    )
}