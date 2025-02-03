"use client";

import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";


export default function PageCadastroFuncionario() {
  return (
    <BasicScreen pageTitle="Cadastrar Funcionário">
      <div style={{height: "70vh", width: "100%", flex: 1, backgroundColor: "blue"}}>
      </div>

      <StandardButton text="ALTERAR" hoverColor="var(--orange)" callback={() => {}}/>
    </BasicScreen>
  );
}