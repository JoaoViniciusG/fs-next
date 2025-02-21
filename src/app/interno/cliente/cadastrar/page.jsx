"use client"

import DefaultApplicationButton from "@/components/buttons/defaultApplicationButton/defaultApplicationButton";
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