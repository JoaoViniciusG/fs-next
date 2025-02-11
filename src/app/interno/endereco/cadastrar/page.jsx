"use client";

import {
    useState
} from 'react';

import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import styles from './page.module.css';

import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from '@/components/containers/borderContainer/page';

export default function PageEnderecoCadastrar() {    
    return (
        <BasicScreen pageTitle="Cadastrar Endereço">
            <BorderContainer>
                <InputLabel label="Label Teste" placeholder="Texto"/>
            </BorderContainer>
        </BasicScreen>
    );
};