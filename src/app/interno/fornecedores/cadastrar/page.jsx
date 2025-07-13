"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AlertModal from '@/components/modals/alertModal/alertModal';

import { useState, useContext } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FornecedorContext } from '@/context/fornecedor.context';

export default function PageCriarFornecedor() {
    const context = useContext(FornecedorContext);
    const router = useRouter();

    const [modalCadastrar, setModalCadastrar] = useState(false);

    const [valueRazaoSocial, setValueRazaoSocial] = useState("");
    const [valueCNPJ, setValueCNPJ] = useState("");
    const [valueEmail, setValueEmail] = useState("");

    const cadastrarFornecedor = async () => {
        if (!valueRazaoSocial || !valueCNPJ || !valueEmail) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        const fornecedor = {
            razaoSocial: valueRazaoSocial,
            cnpj: valueCNPJ.replace(/\D/g, ""),
            email: valueEmail
        };

        const response = await context.cadastrarFornecedorPost(fornecedor);

        if (response) {
            setModalCadastrar(true);
        } else {
            alert("Erro ao cadastrar o fornecedor!");
        }
    }

    const handleCNPJChange = (numeros) => {
        const formatado = context.formatarCNPJ(numeros);
        setValueCNPJ(formatado);
    }

    return (
        <>
            <BasicScreen pageTitle="Cadastrar fornecedor">
                <BorderContainer title="Dados do Fornecedor:">
                    <div className={styles.div_content_main}>
                        <div className={styles.container_content_dados}>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Nome da empresa" type="text"
                                    value={valueRazaoSocial} setValue={setValueRazaoSocial} placeholder="Nome Empresa LTDA" required={true} readonly={false} width='100vh' />
                                <InputLabel label="CNPJ" type="text"
                                    value={valueCNPJ} setValue={handleCNPJChange} placeholder="XX.XXX.XXX/0001-XX" pattern="[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}" required={true} readonly={false} width='100vh' />
                                <InputLabel label="E-mail" type="email"
                                    value={valueEmail} setValue={setValueEmail} placeholder="example@gmail.com" required={true} readonly={false} width='100vh' />
                            </div>
                        </div>
                    </div>
                </BorderContainer>
                <div className={styles.contaner_footer_button}>
                    <StandardButton text="CADASTRAR" hoverColor="var(--cyan)" callback={cadastrarFornecedor} />
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