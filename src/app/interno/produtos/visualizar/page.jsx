"use client";

import styles from './page.module.css';
import DefaultApplicationButton from "@/components/buttons/defaultApplicationButton/defaultApplicationButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function PageVisualizarProduto() {
    return (
        <BasicScreen pageTitle="Informações do Produto">
            <BorderContainer title="Dados do produto:">
                <div className={styles.div_content_main}>
                    <div className={styles.container_content_dados}>
                         <div className={styles.contaner_box}>
                            <InputLabel label="Nome do produto" type="text" placeholder="Nome do produto" required={true} readonly={true} width='60vh' />
                            <InputLabel label="Marca" type="text" placeholder="Selecione a marca" required={true} readonly={true} width='60vh' />
                        </div>
                        <div className={styles.contaner_box}>
                            <InputLabel label="Valor unitário" type="number" placeholder="R$ XXX,XX" required={true} readonly={true} width='60vh' />
                            <InputLabel label="Quantidade em estoque" type="number" placeholder="XX" required={true} readonly={true} width='60vh' />
                        </div>
                    </div>
                </div>
            </BorderContainer>
            <div className={styles.contaner_footer_button}>
                <DefaultApplicationButton text="EXCLUIR" hoverColor="var(--darkred)"/> 
                <DefaultApplicationButton text="ALTERAR" hoverColor="var(--cadetblue-ligtht)"/> 
            </div>
        </BasicScreen>
    );
}