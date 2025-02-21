"use client";

import styles from './page.module.css';
import DefaultApplicationButton from "@/components/buttons/defaultApplicationButton/defaultApplicationButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function PageVisualizarFornecedor() {
    return (
        <BasicScreen pageTitle="Informações do fornecedor">
            <BorderContainer title="Dados do Fornecedor:">
                <div className={styles.div_content_main}>
                    <div className={styles.container_content_dados}>
                        <div className={styles.contaner_box}>
                            <InputLabel label="Nome da empresa" type="text" placeholder= "Nome Empresa LTDA" required={true}  readonly={true} width='100vh' />
                            <InputLabel label="CNPJ" type="text" placeholder= "XX.XXX.XXX/0001-XX" pattern="[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}" required={true}  readonly={true} width='100vh'/>
                            <InputLabel label="E-mail" type="email" placeholder= "example@gmail.com" required={true}  readonly={true} width='100vh' />
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