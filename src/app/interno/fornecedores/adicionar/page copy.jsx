"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function PageCriarFornecedor() {
    return (
        <BasicScreen pageTitle="Cadastrar fornecedor">
            <BorderContainer title="Dados do Fornecedor">
                <div className={styles.div_content_main}>
                    <div className={styles.container_content_dados}>
                        <div className={styles.contaner_box}>
                            <InputLabel label="Nome da empresa" placeholder= "Nome Empresa LTDA" required width='100%' readonly={true}/>
                        </div>
                    </div>
                </div>
            </BorderContainer>
            <StandardButton text="CADASTRAR" hoverColor="var(--cyan)"/>
        </BasicScreen>
    );
}