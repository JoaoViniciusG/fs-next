"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AlertModal from '@/components/modals/alertModal/alertModal';

export default function PageCriarFornecedor() {
    const router = useRouter();

    const [modalCadastrar, setModalCadastrar] = useState(false);

    return (
        <>
            <BasicScreen pageTitle="Cadastrar fornecedor">
                <BorderContainer title="Dados do Fornecedor:">
                    <div className={styles.div_content_main}>
                        <div className={styles.container_content_dados}>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Nome da empresa" type="text" placeholder= "Nome Empresa LTDA" required={true}  readonly={false} width='100vh' />
                                <InputLabel label="CNPJ" type="text" placeholder= "XX.XXX.XXX/0001-XX" pattern="[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}" required={true}  readonly={false} width='100vh'/>
                                <InputLabel label="E-mail" type="email" placeholder= "example@gmail.com" required={true}  readonly={false} width='100vh' />
                            </div>
                        </div>
                    </div>
                </BorderContainer>
                <div className={styles.contaner_footer_button}>
                    <StandardButton text="CADASTRAR" hoverColor="var(--cyan)" callback={() => {setModalCadastrar(true)}}/> 
                </div>
            </BasicScreen>

            <AlertModal 
                title="CADASTRADO"
                text="Fornecedor cadastrado com sucesso!"
                bsIcon="bi-check2-circle"
                isOpen={modalCadastrar}
                setIsOpen={setModalCadastrar}
                callback={() => router.push("/interno/fornecedores/consultar")} />
        </>
    );
}