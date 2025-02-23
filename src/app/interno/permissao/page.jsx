"use client";

import styles from './page.module.css';

import { permissionModel } from '../../../../files/permissionModel';

import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import BorderContainer from '@/components/containers/borderContainer/page';
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import RadioButton from '@/components/inputs/radioButton/radioButton';
import PermissionOption from '@/components/containers/permissionOption/permissionOption';

import { useEffect, useState } from 'react';

export default function PermissoesPage() {
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Admin");

  const handleOptionChange = (event) => {
    const value = event.target.value;
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


  return (
    <BasicScreen pageTitle="Permissões">
      <BorderContainer title="Dados pessoais:">
        <div className={styles.containerUserData}>
          <InputLabel label="ID:" width='20vw' readonly={true} />
          <InputLabel label="Nome:" width='20vw' readonly={true} />
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
    </BasicScreen>
  );
}