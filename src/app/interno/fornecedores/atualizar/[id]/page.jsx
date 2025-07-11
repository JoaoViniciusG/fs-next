"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import ActionModal from '@/components/modals/actionModal/actionModal';
import AlertModal from '@/components/modals/alertModal/alertModal';

import { useEffect, useState, useContext } from 'react';
import { FornecedorContext } from '@/context/fornecedor.context';
import { useParams, useRouter } from 'next/navigation';


export default function PageAtualizarFornecedor() {
    const context = useContext(FornecedorContext);
    const router = useRouter();
    const id = useParams()["id"];

    const [modalPerguntaCancelar, setModalPerguntaCancelar] = useState(false);
    const [modalCancelar, setModalCancelar] = useState(false);
    const [modalConfimar, setModalConfimar] = useState(false);

    const [valueRazaoSocial, setValueRazaoSocial] = useState("");
    const [valueCNPJ, setValueCNPJ] = useState("");
    const [valueEmail, setValueEmail] = useState("");

    const [valueOriginalRazaoSocial, setValueOrginalRazaoSocial] = useState("");
    const [valueOriginalCNPJ, setValueOriginalCNPJ] = useState("");
    const [valueOriginalEmail, setValueOriginalEmail] = useState("");

    useEffect( () => {
        if(!id) return;
        context.fornecedorById(id);
    }, [id]);

    useEffect( () => {
        if(!context.fornecedorSelect) return;

        const fornecedor = context.fornecedorSelect;

        setValueRazaoSocial(fornecedor.razaoSocial);
        setValueCNPJ(fornecedor.cnpj);
        setValueEmail(fornecedor.email);

        setValueOrginalRazaoSocial(fornecedor.razaoSocial);
        setValueOriginalCNPJ(fornecedor.cnpj);
        setValueOriginalEmail(fornecedor.email);
    }, [context.fornecedorSelect]);

    const camposPreenchidos = (fornecedor) => {
        return (
            fornecedor.razaoSocial !== "" &&
            fornecedor.cnpj !== "" &&
            fornecedor.email !== ""
        );
    }

    const atualizarFornecedor = async () => {
        const fornecedor = {
            razaoSocial: valueRazaoSocial,
            cnpj: valueCNPJ,
            email: valueEmail
        };

        let camposAlterados = 0;

         if (valueRazaoSocial !== valueOriginalRazaoSocial) {
            camposAlterados++;
        }
        if (valueCNPJ !== valueOriginalCNPJ) {
            camposAlterados++;
        }
        if (valueEmail !== valueOriginalEmail) {
            camposAlterados++;
        }

        if (camposAlterados === 0) {
            alert("Nenhum campo foi alterado!");
            return;
        }

        let response = false;

        if (camposAlterados === 4 && camposPreenchidos(fornecedor)) {
            response = await context.atualizarFornecedorCompleto(id, fornecedor);
        } else {
            response = await context.atualizarFornecedorParcial(id, fornecedor);
        }

        if (response) {
            setModalConfimar(true);
        }
    }

    return (
        <>
            <BasicScreen pageTitle="Atualizar fornecedor">
                <BorderContainer title="Dados do Fornecedor:">
                    <div className={styles.div_content_main}>
                        <div className={styles.container_content_dados}>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Nome da empresa" type="text" value={valueRazaoSocial} setValue={setValueRazaoSocial} placeholder="Nome Empresa LTDA" required={true} readonly={false} width='100vh' />
                                <InputLabel label="CNPJ" type="text" value={valueCNPJ} setValue={setValueCNPJ} placeholder="XX.XXX.XXX/0001-XX" pattern="[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}" required={true} readonly={false} width='100vh' />
                                <InputLabel label="E-mail" type="email" value={valueEmail} setValue={setValueEmail} placeholder="example@gmail.com" required={true} readonly={false} width='100vh' />
                            </div>
                        </div>
                    </div>
                </BorderContainer>
                <div className={styles.contaner_footer_button}>
                    <StandardButton text="CANCELAR" hoverColor="var(--darkred)" callback={() => {setModalPerguntaCancelar(true)}} />
                    <StandardButton text="CONFIRMAR" hoverColor="var(--cyan)" callback={() => {atualizarFornecedor()}} />
                </div>
            </BasicScreen>

            <ActionModal
                title="AVISO"
                text="Tem certeza de que deseja cancelar? Lembre-se de que todas as alterações feitas serão excluídas ao cancelar!"
                bsIcon="bi-exclamation-triangle-fill"
                isOpen={modalPerguntaCancelar}
                setIsOpen={setModalPerguntaCancelar}
                textBtn1="CANCELAR"
                textBtn2="CONFIRMAR"
                callbackB2={() => setModalCancelar(true)} />

            <AlertModal
                title="CANCELADO"
                text="Alteração cancelada com sucesso!"
                bsIcon="bi-check2-circle"
                isOpen={modalCancelar}
                setIsOpen={setModalCancelar}
                callback={() => router.replace("/interno/fornecedores/consultar")} />

            <AlertModal
                title="ALTERADO"
                text="Atualização realizada com sucesso!"
                bsIcon="bi-check2-circle"
                isOpen={modalConfimar}
                setIsOpen={setModalConfimar}
                callback={() => router.replace("/interno/fornecedores/consultar")} />

        </>
    );
}