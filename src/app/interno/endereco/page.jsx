"use client";

import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import styles from './page.module.css';

import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from '@/components/containers/borderContainer/page';
import StandardButton from '@/components/buttons/standardButton/standardButton';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageEnderecoCadastrar() {
    const pathname = usePathname();

    const [isReadonly, setIsReadonly] = useState("");
    const [pageTitle, setPageTitle] = useState("");

    const [contentCep, setContentCep] = useState("");
    const [contentRua, setContentRua] = useState("");
    const [contentBairro, setContentBairro] = useState("");
    const [contentNumero, setContentNumero] = useState("");
    const [contentEstado, setContentEstado] = useState("");
    const [contentCidade, setContentCidade] = useState("");

    const buttonProperties = {
        cancelButton: {
            text: "CANCELAR",
            hoverColor: "var(--darkred)",
            callback: () => {}
        },
        registerButton: {
            text: "CADASTRAR",
            hoverColor: "var(--cadetblue-ligtht)",
            callback: () => {}
        },
        changeButton: {
            text: "ALTERAR",
            hoverColor: "var(--cadetblue-ligtht)",
            callback: () => {}
        },
        confirmButton: {
            text: "CONFIRMAR",
            hoverColor: "var(--cyan)",
            callback: () => {}
        },
        deleteButton: {
            text: "EXCLUIR ENDEREÇO",
            hoverColor: "var(--darkred)",
            callback: () => {}
        }
    };

    const [buttonsConfig, setButtonsConfig] = useState({button1: buttonProperties.deleteButton, button2: buttonProperties.changeButton })

    useEffect(() => {
        switch (pathname.split("/")[3]) {
            case "visualizar":
                setIsReadonly(true);
                setButtonsConfig({button1: buttonProperties.deleteButton, button2: buttonProperties.changeButton })
                setPageTitle("Visualizar Endereço")
                break;
            case "alterar":
                setIsReadonly(false);
                setButtonsConfig({button1: buttonProperties.deleteButton, button2: buttonProperties.confirmButton })
                setPageTitle("Alterar Endereço")
                break;
            case "cadastrar":
                setIsReadonly(false);
                setButtonsConfig({button1: buttonProperties.cancelButton, button2: buttonProperties.registerButton })
                setPageTitle("Cadastrar Endereço")
                break;
        }
    }, [pathname])

    return (
        <BasicScreen pageTitle={pageTitle} contentContainerStyle={{ padding: 55, paddingTop: 0, gap: 50 }}>
            <BorderContainer style={{ width: '100%' }}>
                <div className={styles.containerInputs} >
                    <InputLabel 
                        label="CEP:" 
                        width='25vw' 
                        readonly={isReadonly} 
                        value={contentCep} 
                        setValue={setContentCep}/>
                    <InputLabel 
                        label="Rua:" 
                        width='54vw' 
                        readonly={isReadonly} 
                        value={contentRua} 
                        setValue={setContentRua}/>

                    <div className={styles.containerInputsRow}>
                        <InputLabel 
                            label="Bairro:" 
                            width='25vw' 
                            readonly={isReadonly} 
                            value={contentBairro} 
                            setValue={setContentBairro}/>

                        <InputLabel 
                            label="Número:" 
                            width='20vw'
                            style={{ marginRight: '5vw' }} 
                            readonly={isReadonly} 
                            value={contentNumero} 
                            setValue={setContentNumero}/>
                    </div>

                    <div className={styles.containerInputsRow}>
                        <InputLabel 
                            label="Estado:" 
                            width='25vw' 
                            readonly={isReadonly}
                            value={contentEstado} 
                            setValue={setContentEstado}/>
                        <InputLabel 
                            label="Cidade:" 
                            width='25vw' 
                            readonly={isReadonly}
                            value={contentCidade} 
                            setValue={setContentCidade}/>
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
    );
};