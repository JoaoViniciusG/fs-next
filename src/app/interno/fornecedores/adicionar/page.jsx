"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";

export default function PageCriarFornecedor() {
    return (
        <BasicScreen pageTitle="Cadastrar fornecedor">
            <BorderContainer title="Dados do Fornecedor">
                <div className={styles.div_content_main}>
                    <div className={styles.container_content_dados}>
                        <div className={styles.contaner_box}>
                            <h3 className={styles.titule_box}>Nome da empresa</h3>
                            <input type="text" name="nome_fornecedor" id="nome_fornecedor" placeholder="Nome Empresa LTDA" required className={styles.input_box}/>
                        </div>
                    </div>
                </div>
            </BorderContainer>
            <StandardButton text="CADASTRAR" hoverColor="var(--cyan)"/>
        </BasicScreen>
    );
}