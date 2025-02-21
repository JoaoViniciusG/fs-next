"use client";

import styles from './page.module.css';
import * as Icon from 'react-feather';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function PageConsultarProdutos() {
    return (
        <BasicScreen pageTitle="Consultar produtos">
            <BorderContainer title="Consultar produtos:">
                <div className={styles.div_contener_main}>
                    <div className={styles.filter_dados}>
                        <div className={styles.button_filter}>
                            <p className={styles.filter_text}>Filtro: </p>
                            <Icon.Filter className={styles.icon_filter} />
                        </div>
                    </div>
                    <div className={styles.div_content_busca}>
                        <InputLabel label="Buscar o produto" type="search" placeholder="Pesquise as informações do produto" required={false} readonly={false} width='100vh' />
                        <StandardButton text="BUSCAR" hoverColor="var(--cyan)" />
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
                            <tr>
                                <td>00001</td>
                                <td>Monitor 15”</td>
                                <td>HP</td>
                                <td>180</td>
                                <td>R$ 520,00</td>
                            </tr>
                            <tr>
                                <td>00002</td>
                                <td>Monitor 20”</td>
                                <td>HP</td>
                                <td>200</td>
                                <td>R$ 610,00</td>
                            </tr>
                            <tr>
                                <td>00003</td>
                                <td>Notebook</td>
                                <td>HP</td>
                                <td>120</td>
                                <td>R$ 3200,00</td>
                            </tr>
                            <tr>
                                <td>00004</td>
                                <td>Impressora Multifuncional</td>
                                <td>HP</td>
                                <td>57</td>
                                <td>R$ 520,00</td>
                            </tr>
                            <tr>
                                <td>00005</td>
                                <td>Teclado e Mouse sem fio</td>
                                <td>HP</td>
                                <td>70</td>
                                <td>R$ 130,00</td>
                            </tr>
                            <tr>
                                <td>00006</td>
                                <td>Notebook</td>
                                <td>DELL</td>
                                <td>180</td>
                                <td>R$ 2300,00</td>
                            </tr>
                            <tr>
                                <td>00007</td>
                                <td>Computador</td>
                                <td>DELL</td>
                                <td>200</td>
                                <td>R$ 4999,00</td>
                            </tr>
                            <tr>
                                <td>00008</td>
                                <td>Monitor 20”</td>
                                <td>DELL</td>
                                <td>120</td>
                                <td>R$ 3200,00</td>
                            </tr>
                            <tr>
                                <td>00009</td>
                                <td>Impressora Multifuncional</td>
                                <td>DELL</td>
                                <td>57</td>
                                <td>R$ 520,00</td>
                            </tr>
                            <tr>
                                <td>00010</td>
                                <td>Teclado e Mouse sem fio</td>
                                <td>DELL</td>
                                <td>70</td>
                                <td>R$ 230,00</td>
                            </tr>
                            <tr>
                                <td>00011</td>
                                <td>Notebook</td>
                                <td>ASUS</td>
                                <td>180</td>
                                <td>R$ 4200,00</td>
                            </tr>
                            <tr>
                                <td>00012</td>
                                <td>Computador</td>
                                <td>ASUS</td>
                                <td>200</td>
                                <td>R$ 4999,00</td>
                            </tr>
                            <tr>
                                <td>00013</td>
                                <td>Console Portátil</td>
                                <td>ASUS</td>
                                <td>120</td>
                                <td>R$ 4980,00</td>
                            </tr>
                            <tr>
                                <td>00014</td>
                                <td>Placa Mãe</td>
                                <td>ASUS</td>
                                <td>57</td>
                                <td>R$ 645,00</td>
                            </tr>
                            <tr>
                                <td>00015</td>
                                <td>Teclado e Mouse sem fio</td>
                                <td>ASUS</td>
                                <td>70</td>
                                <td>R$ 230,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BorderContainer>
        </BasicScreen>
    )
}