"use client";

import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import styles from './page.module.css';

import BasicScreen from "@/components/screens/basicScreen/basicScreen";

export default function PageEnderecoCadastrar() {
    return (
        <BasicScreen pageTitle="Cadastrar Endereço">
            <InputLabel label="Label Teste" width='50%' readonly={true}/>
        </BasicScreen>
    );
};