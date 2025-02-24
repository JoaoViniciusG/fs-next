"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AlertModal from '@/components/modals/alertModal/alertModal';
import ActionModal from '@/components/modals/actionModal/actionModal';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PageVisualizarFornecedor() {
    const router = useRouter();
    const [modalPergunta, setModalPergunta] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);

    const [valueNome, setValueNome] = useState("Fornecedor 1");
    const [valueCNPJ, setValueCNPJ] = useState("XX.XXX.XXX/0001-XX");
    const [valueEmail, setValueEmail] = useState("example@gmail.com");

    return (
        <>
            <BasicScreen pageTitle="Informações do fornecedor">
                <BorderContainer title="Dados do Fornecedor:">
                    <div className={styles.div_content_main}>
                        <div className={styles.container_content_dados}>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Nome da empresa" type="text" value={valueNome} setValue={setValueNome} placeholder="Nome Empresa LTDA" required={true} readonly={true} width='100vh' />
                                <InputLabel label="CNPJ" type="text" value={valueCNPJ} setValue={setValueCNPJ} placeholder="XX.XXX.XXX/0001-XX" pattern="[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}" required={true} readonly={true} width='100vh' />
                                <InputLabel label="E-mail" type="email" value={valueEmail} setValue={setValueEmail} placeholder="example@gmail.com" required={true} readonly={true} width='100vh' />
                            </div>
                        </div>
                    </div>
                </BorderContainer>
                <div className={styles.contaner_footer_button}>
                    <StandardButton text="EXCLUIR" hoverColor="var(--darkred)" callback={() => {setModalPergunta(true)}}/>
                    <StandardButton text="ALTERAR" hoverColor="var(--cadetblue-ligtht)" callback={() => {router.push("/interno/fornecedores/atualizar")}}/>
                </div>
            </BasicScreen>

            <ActionModal 
                title="AVISO" 
                text="Tem certeza que deseja excluir o cadastro desse fornecedor?" 
                bsIcon="bi-exclamation-triangle-fill" 
                isOpen={modalPergunta}
                setIsOpen={setModalPergunta} 
                textBtn1="CANCELAR" 
                textBtn2="CONFIRMAR"
                callbackB2={() => setModalExcluir(true)}/>
            
            <AlertModal 
                title="EXCLUÍDO" 
                text="Fornecedor excluído com sucesso!" 
                bsIcon="bi-check2-circle" 
                isOpen={modalExcluir} 
                setIsOpen={setModalExcluir}
                callback={() => router.replace("/interno/fornecedores/consultar")}/>
        </>
    );
}