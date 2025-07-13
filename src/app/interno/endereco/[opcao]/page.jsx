"use client";

import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import styles from './page.module.css';

import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from '@/components/containers/borderContainer/page';
import StandardButton from '@/components/buttons/standardButton/standardButton';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useContext, useCallback } from 'react';
import { EnderecoContext } from '@/context/endereco.context';
import ActionModal from '@/components/modals/actionModal/actionModal';
import AlertModal from '@/components/modals/alertModal/alertModal';

export default function PageEnderecoCadastrar() {
    const context = useContext(EnderecoContext);
    const paramOpcao = useParams()["opcao"];
    const pathname = usePathname();
    const router = useRouter();

    const [modalQuestionDelete, setModalQuestionDelete] = useState(false);
    const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
    const [modalConfirmChange, setModalConfirmChange] = useState(false);
    const [modalConfirmCreate, setModalConfirmCreate] = useState(false);

    const [enderecoInfos, setEnderecoInfos] = useState();

    const [idRegistro, setIdRegistro] = useState();
    const [contentBairro, setContentBairro] = useState("");
    const [contentNumero, setContentNumero] = useState("");
    const [contentEstado, setContentEstado] = useState("");
    const [contentCidade, setContentCidade] = useState("");
    const [contentCep, setContentCep] = useState("");
    const [contentRua, setContentRua] = useState("");
    const [isReadonly, setIsReadonly] = useState("");
    const [pageTitle, setPageTitle] = useState("");


    const clearAll = () => {
        setContentCep("");
        setContentRua("");
        setContentBairro("");
        setContentNumero("");
        setContentEstado("");
        setContentCidade("");
    }

    const deleteEndereco = async () => {
        await context.deleteEndereco(idRegistro);

        if (!context.hasError) setModalConfirmDelete(true);
    }

    function formatarCEP(valor) {
        valor = valor.replace(/\D/g, '');
        valor = valor.slice(0, 8);

        if (valor.length <= 5) return valor;
        return valor.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    }

    const alterarEndereco = async () => {
        if (!enderecoInfos || Object.keys(enderecoInfos).length === 0) return;

        let end = { ...enderecoInfos };
        end.id = idRegistro;
        end.estado = contentEstado;
        end.numero = contentNumero;
        end.bairro = contentBairro;
        end.cidade = contentCidade;
        end.logradouro = contentRua;
        end.cep = contentCep;

        const res = await context.alterarEndereco(end);
        if (res) setModalConfirmChange(true);
    };

    const criarEndereco = async () => {
        if (!enderecoInfos || Object.keys(enderecoInfos).length === 0) return;

        let end = {};
        end.estado = contentEstado;
        end.numero = contentNumero;
        end.bairro = contentBairro;
        end.cidade = contentCidade;
        end.logradouro = contentRua;
        end.cep = contentCep;

        const res = await context.alterarEndereco(end);
        if (res) setModalConfirmCreate(true);
    };

    const handleCepChange = (value) => {
        const valorFormatado = formatarCEP(value);
        setContentCep(valorFormatado);
    };

    const buttonProperties = {
        cancelButton: {
            text: "CANCELAR",
            hoverColor: "var(--darkred)",
            callback: () => { router.back() }
        },
        registerButton: {
            text: "CADASTRAR",
            hoverColor: "var(--cadetblue-ligtht)",
            callback: criarEndereco
        },
        changeButton: {
            text: "ALTERAR",
            hoverColor: "var(--cadetblue-ligtht)",
            callback: () => { router.push(`/interno/endereco/alterar/${paramOpcao}`) }
        },
        confirmButton: {
            text: "CONFIRMAR",
            hoverColor: "var(--cyan)",
            callback: alterarEndereco
        },
        deleteButton: {
            text: "EXCLUIR ENDEREÇO",
            hoverColor: "var(--darkred)",
            callback: () => { setModalQuestionDelete(true) }
        }
    };

    const [buttonsConfig, setButtonsConfig] = useState({ button1: buttonProperties.deleteButton, button2: buttonProperties.changeButton })

    useEffect(() => {
        switch (pathname.split("/")[3]) {
            case "visualizar":
                setButtonsConfig({
                    button1: {
                        text: "EXCLUIR ENDEREÇO",
                        hoverColor: "var(--darkred)",
                        callback: () => setModalQuestionDelete(true)
                    },
                    button2: {
                        text: "ALTERAR",
                        hoverColor: "var(--cadetblue-ligtht)",
                        callback: () => router.push(`/interno/endereco/alterar/${paramOpcao}`)
                    }
                });
                break;
            case "alterar":
                if (enderecoInfos) {
                    setButtonsConfig({
                        button1: {
                            text: "EXCLUIR ENDEREÇO",
                            hoverColor: "var(--darkred)",
                            callback: () => setModalQuestionDelete(true)
                        },
                        button2: {
                            text: "CONFIRMAR",
                            hoverColor: "var(--cyan)",
                            callback: alterarEndereco // <- usa função separada corretamente
                        }
                    });
                }
                break;

            case "cadastrar":
                setButtonsConfig({
                    button1: {
                        text: "CANCELAR",
                        hoverColor: "var(--darkred)",
                        callback: () => router.back()
                    },
                    button2: {
                        text: "CADASTRAR",
                        hoverColor: "var(--cadetblue-ligtht)",
                        callback: () => setModalConfirmCreate(true)
                    }
                });
                break;
        }
    }, [pathname, enderecoInfos, contentEstado, contentNumero, contentBairro, contentCidade, contentRua, contentCep, idRegistro]);

    useEffect(() => {
        switch (pathname.split("/")[3]) {
            case "visualizar":
                clearAll();
                setIsReadonly(true);
                setButtonsConfig({ button1: buttonProperties.deleteButton, button2: buttonProperties.changeButton });
                setPageTitle("Visualizar Endereço");
                context.getEndereco(paramOpcao);
                break;
            case "alterar":
                clearAll();
                setIsReadonly(false);
                setButtonsConfig({ button1: buttonProperties.deleteButton, button2: buttonProperties.confirmButton });
                setPageTitle("Alterar Endereço");
                context.getEndereco(paramOpcao);
                break;
            case "cadastrar":
                clearAll();
                setIsReadonly(false);
                setButtonsConfig({ button1: buttonProperties.cancelButton, button2: buttonProperties.registerButton });
                setPageTitle("Cadastrar Endereço");
                break;
        }
    }, [pathname])

    useEffect(() => {
        if (!context.enderecoById || Object.keys(context.enderecoById).length === 0) return;

        setEnderecoInfos(context.enderecoById);

        setIdRegistro(context.enderecoById.id);
        setContentEstado(context.enderecoById.estado);
        setContentNumero(context.enderecoById.numero);
        setContentBairro(context.enderecoById.bairro);
        setContentCidade(context.enderecoById.cidade);
        setContentRua(context.enderecoById.logradouro);
        setContentCep(context.enderecoById.cep);
    }, [context.enderecoById]);

    return (
        <>
            <BasicScreen pageTitle={pageTitle} contentContainerStyle={{ padding: 55, paddingTop: 0, gap: 50 }}>
                <BorderContainer style={{ width: '100%' }}>
                    <div className={styles.containerInputs} >
                        <InputLabel
                            label="CEP:"
                            width='25vw'
                            readonly={isReadonly}
                            value={contentCep}
                            setValue={handleCepChange} />
                        <InputLabel
                            label="Rua:"
                            width='54vw'
                            readonly={isReadonly}
                            value={contentRua}
                            setValue={setContentRua} />

                        <div className={styles.containerInputsRow}>
                            <InputLabel
                                label="Bairro:"
                                width='25vw'
                                readonly={isReadonly}
                                value={contentBairro}
                                setValue={setContentBairro} />

                            <InputLabel
                                label="Número:"
                                width='20vw'
                                style={{ marginRight: '5vw' }}
                                readonly={isReadonly}
                                value={contentNumero}
                                setValue={setContentNumero} />
                        </div>

                        <div className={styles.containerInputsRow}>
                            <InputLabel
                                label="Estado:"
                                width='25vw'
                                readonly={isReadonly}
                                value={contentEstado}
                                setValue={setContentEstado} />
                            <InputLabel
                                label="Cidade:"
                                width='25vw'
                                readonly={isReadonly}
                                value={contentCidade}
                                setValue={setContentCidade} />
                        </div>
                    </div>
                </BorderContainer>

                <div className={styles.bottomButtonsContainer}>
                    <StandardButton
                        text={buttonsConfig.button1.text}
                        hoverColor={buttonsConfig.button1.hoverColor}
                        callback={buttonsConfig.button1.callback} />
                    <StandardButton
                        text={buttonsConfig.button2.text}
                        hoverColor={buttonsConfig.button2.hoverColor}
                        callback={buttonsConfig.button2.callback} />
                </div>
            </BasicScreen>

            <ActionModal
                title='AVISO'
                text='Tem certeza que deseja excluir o cadastro endereço?'
                bsIcon="bi bi-exclamation-triangle-fill"
                isOpen={modalQuestionDelete}
                setIsOpen={setModalQuestionDelete}
                textBtn1='CANCELAR'
                textBtn2='CONFIRMAR'
                callbackB2={deleteEndereco} />

            <AlertModal
                title='EXCLUÍDO'
                text='Endereço excluído com sucesso!'
                bsIcon="bi-check2-circle"
                setIsOpen={setModalConfirmDelete}
                isOpen={modalConfirmDelete}
                callback={router.back} />

            <AlertModal
                title='ALTERADO'
                text='Endereço alterado com sucesso!'
                bsIcon="bi-check2-circle"
                setIsOpen={setModalConfirmChange}
                isOpen={modalConfirmChange}
                callback={router.back} />

            <AlertModal
                title='CRIADO'
                text='Endereço criado com sucesso!'
                bsIcon="bi-check2-circle"
                setIsOpen={setModalConfirmCreate}
                isOpen={modalConfirmCreate}
                callback={router.back} />
        </>
    );
};