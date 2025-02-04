"use client"

import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";

import {
    useState
} from 'react';

import { useRouter } from "next/navigation";
import BorderContainer from "@/components/containers/borderContainer/page";

export default function PageClienteCadastrar() {
    return (
        <BasicScreen pageTitle="Cadastrar cliente">
            <BorderContainer />
        </BasicScreen>
    );
}