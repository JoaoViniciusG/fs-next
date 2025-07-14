"use client";

import styles from './page.module.css';

import { permissionModel } from '../../../../files/permissionModel';

import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import BorderContainer from '@/components/containers/borderContainer/page';
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import RadioButton from '@/components/inputs/radioButton/radioButton';
import PermissionOption from '@/components/containers/permissionOption/permissionOption';

import { useContext, useEffect, useState } from 'react';
import AlertModal from '@/components/modals/alertModal/alertModal';
import ActionModal from '@/components/modals/actionModal/actionModal';
import StandardButton from '@/components/buttons/standardButton/standardButton';
import { useParams, useRouter } from 'next/navigation';

import { FuncionarioContext } from '@/context/funcionario.context';
import { ApplicationContext } from '@/context/application.context';

export default function PermissoesPage() {
  const applicationContext = useContext(ApplicationContext);
  const context = useContext(FuncionarioContext);

  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("")

  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Admin");
  const [modalQuestionOpen, setModalQuestionOpen] = useState(false);

  useEffect(() => {
    setUserId(context.funcionarioCadastroId)
    setUserName(context.funcionarioCadastrar.nome)
  }, [context.funcionarioCadastrar]);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  useEffect(() => {
    changePermissionMode(permissionModel)
  }, [permissionModel]);

  useEffect(() => {
    if (data != null) changePermissionMode(data);
  }, [selectedOption]);

  const changePermissionMode = (currentData) => {
    let test = [];

    for (let item of currentData) {
      test.push({
        name: item.name,
        cardId: item.cardId,
        cardEnabled: (selectedOption != "Admin"),
        cardOptionsEnabled: false,
        consult: (selectedOption == "Admin"),
        create: (selectedOption == "Admin"),
        change: (selectedOption == "Admin"),
        delete: (selectedOption == "Admin")
      })
    }

    setData(test);
  }

  const submit = () => {
    applicationContext.loadingDefine(true);
    context.novoIdFuncionarioCadastrar(true);
    
    setTimeout(() => {
      applicationContext.loadingDefine(false);
      setModalQuestionOpen(true)
    }, 1500)
  };

  return (
    <>
      <BasicScreen pageTitle="Permissões">
        <BorderContainer title="Dados pessoais:">
          <div className={styles.containerUserData}>
            <InputLabel label="ID:" width='20vw' readonly={true} value={userId} setValue={setUserId} />
            <InputLabel label="Nome:" width='20vw' readonly={true} value={userName} setValue={setUserName} />
          </div>
        </BorderContainer>

        <div className={styles.containerPermissionSection}>
          <h1 className={styles.containerPermissionTitle}>Permissões:</h1>

          <div className={styles.radioButtonGroup}>
            <RadioButton
              text="Administrador"
              valueName="Admin"
              selectedOption={selectedOption}
              handleOptionChange={handleOptionChange}
              textInLeft={false}
              radioGroup="userPermission" />
            <RadioButton
              text="Personalizado"
              valueName="Personalizado"
              selectedOption={selectedOption}
              handleOptionChange={handleOptionChange}
              textInLeft={false}
              radioGroup="userPermission" />
          </div>

          <div className={styles.containerPermissions}>
            {
              (data !== null) &&
              data.map((item) => (
                <PermissionOption
                  key={item.cardId}
                  element={item} />
              ))
            }
          </div>
        </div>

        <StandardButton
          text="CONFIRMAR"
          hoverColor="var(--ligth-darkcyan)"
          style={{ alignSelf: "flex-end", marginTop: 25 }}
          callback={submit} />

      </BasicScreen>

      <AlertModal
        title='ALTERADAS'
        text='Permissões alteradas com sucesso!'
        bsIcon="bi-check2-circle"
        isOpen={modalQuestionOpen}
        setIsOpen={setModalQuestionOpen}
        callback={() => router.replace("/interno")}/>
    </>
  );
}