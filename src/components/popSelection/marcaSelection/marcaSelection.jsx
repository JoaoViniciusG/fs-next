"use client";

import styles from './marcaSelection.module.css';
import * as Icon from 'react-feather';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

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
    setIsOpen = () => {}, 
    }) {
    return (
        <div style={{display: (isOpen) ? "flex" : "none" }} className={styles.backgroundContainer}>
            <div style={{width: width}} className={styles.content_pop_consultar}>
                <div className={styles.contener_close_pop}>
                    <Icon.X onClick = { () => {setIsOpen(false)}} className={styles.icon_fechar}/>
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
                            <InputLabel label={textInputTitle} type="search" placeholder={textPlaceholder} required={false} readonly={false} width='70vh' />
                            <StandardButton text={textBtnBuscar} hoverColor="var(--cyan)" />
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
                                <tr onClick={()=>{setIsOpen(false);}}>
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