"use client";

import DefaultApplicationButton from "@/components/buttons/defaultApplicationButton/defaultApplicationButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";

import {
  useState,
  useEffect
} from 'react';

import { useRouter } from "next/navigation";


export default function PageCadastroFuncionario() {
  const [textTeste, setTextTeste] = useState("");
  const [atualizar, setAtualizar] = useState(false);

  const router = useRouter();

  return (
    <BasicScreen pageTitle="Cadastrar Funcionário">

      <input type="text" style={{fontSize: 30}} value={textTeste} onChange={(e) => setTextTeste(e.target.value)} />
      <div>
        <DefaultApplicationButton text="SEM USECALLBACK" hoverColor="var(--orange)"/>
        <DefaultApplicationButton text="COM USECALLBACK" hoverColor="var(--orange)"/>
      </div>

      <DefaultApplicationButton text="Atualizar" callback={() => setAtualizar(!atualizar)}/>
    </BasicScreen>
  );
}