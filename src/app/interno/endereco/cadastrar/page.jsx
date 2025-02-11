"use client";

import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import styles from './page.module.css';

import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from '@/components/containers/borderContainer/page';
import StandardButton from '@/components/buttons/stardardButton/standardButton';

export default function PageEnderecoCadastrar() {
    return (
        <BasicScreen pageTitle="Cadastrar Endereço">
            <BorderContainer style={{width: '90%'}}>
                <div className={styles.containerInputs}>
                    <InputLabel label="CEP:" width='20vw'/>
                    <InputLabel label="Rua:" width='43vw'/>

                    <div className={styles.containerInputsRow}>
                        <InputLabel label="Bairro:" width='22vw'/>
                        <InputLabel label="Número:" width='15vw' type='number' style={{marginRight: '7vw'}}/>
                    </div>

                    <div className={styles.containerInputsRow}>
                        <InputLabel label="Estado:" width='22vw'/>
                        <InputLabel label="Cidade:" width='22vw'/>
                    </div>
                </div>
            </BorderContainer>

            <StandardButton text="CADASTRAR" hoverColor="var(--powderblue)" style={{alignSelf: 'start'}}/>
        </BasicScreen>
    );
};