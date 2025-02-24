import styles from './consultModal.module.css';
import * as Icon from 'react-feather';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import StandardButton from '@/components/buttons/standardButton/standardButton';
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import BorderContainer from '@/components/containers/borderContainer/page';

export default function ConsultModal({isOpen = true, width = "max-content" }) {
    const router = useRouter();
    const [close, setClose] = useState(false)

    return (
        <div 
        style={{display: (isOpen) ? "flex" : "none" }}  
        className={styles.backgroundContainer}>
            <div
            style={{width: width}} 
            className={styles.content_pop_consultar}>
                <div className={styles.contener_pop_button_consultar}>
                    <Icon.X className={styles.iconClose} onClick={() => {setClose(true)}} />
                </div>
                <BorderContainer title="Consultar Marcas:">
                    <div className={styles.div_contener_main}>
                        <div className={styles.filter_dados}>
                            <div className={styles.button_filter}>
                                <p className={styles.filter_text}>Filtro: </p>
                                <Icon.Filter className={styles.icon_filter} />
                            </div>
                        </div>
                        <div className={styles.div_content_busca}>
                            <InputLabel label="Buscar a Marca:" type="search" placeholder="Pesquisar a marca do produto." required={false} readonly={false} width='100vh' />
                            <StandardButton text="BUSCAR" hoverColor="var(--cyan)" />
                        </div>
                    </div>
                </BorderContainer>

                <BorderContainer title="Marcas:">
                    <div className={styles.content_table}>
                        <table className={styles.table_marcas}>
                            <thead className={styles.table_header}>
                                <tr onClick={() => {router.back()}}>
                                    <th scope="col">ID Marca</th>
                                    <th scope="col">Fornecedor</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">CNPJ</th>
                                </tr>
                            </thead>
                            <tbody className={styles.table_body}>
                                <tr>
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
        </div>
    );
}