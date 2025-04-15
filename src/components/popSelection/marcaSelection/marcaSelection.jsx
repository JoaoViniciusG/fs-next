"use client";

import styles from './marcaSelection.module.css';
import * as Icon from 'react-feather';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function MarcaSelection() {
    return (
        <div className={styles.content_pop_consultar}>
            <div className={styles.contener_close_pop}>
                <Icon.Closer className={styles.icon_fechar}/>
            </div>
            <BorderContainer title="Consultar produtos: ">
                <div className={styles.div_contener_main}>
                    <div className={styles.filter_dados}>
                        <div className={styles.button_filter}>
                            <p className={styles.filter_text}>Filtro: </p>
                            <Icon.Filter className={styles.icon_filter} />
                        </div>
                    </div>
                    <div className={styles.div_content_busca}>
                        <InputLabel label="Buscar a marca" type="search" placeholder="Pesquise as marcas e suas informações." required={false} readonly={false} width='100vh' />
                        <StandardButton text="BUSCAR" hoverColor="var(--cyan)" />
                    </div>
                </div>
            </BorderContainer>
            <BorderContainer title="Produtos:">
                <div className={styles.content_table}>
                    <table className={styles.table_fornecedores}>
                        <thead className={styles.table_header}>
                            <tr>
                                <th scope="col">ID Marca</th>
                                <th scope="col">Fornecedor</th>
                                <th scope="col">Marca</th>
                                <th scope="col">CNPJ</th>
                            </tr>
                        </thead>
                        <tbody className={styles.table_body}>
                            <tr onClick={() => router.push("/interno/produtos/visualizar")}>
                                <td>00001</td>
                                <td>Fornecedor 1</td>
                                <td>HP</td>
                                <td>61.797.924/0003-17</td>
                            </tr>
                            <tr>
                                <td>00002</td>
                                <td>Fornecedor 2</td>
                                <td>Asus</td>
                                <td>84.498.328/0001-70</td>
                            </tr>
                            <tr>
                                <td>00003</td>
                                <td>Fornecedor 3</td>
                                <td>Dell</td>
                                <td>72.381.189/0001-10</td>
                            </tr>
                            <tr>
                                <td>00004</td>
                                <td>Fornecedor 4</td>
                                <td>Vaio</td>
                                <td>12.880.757/0001-04</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BorderContainer>
        </div>
    );
}