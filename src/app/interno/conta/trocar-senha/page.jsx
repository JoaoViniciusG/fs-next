'use client'
import React, { useState } from 'react';
import styles from "./page.module.css"
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import StandardButton from '@/components/buttons/standardButton/standardButton';
import Image from 'next/image';
import InputLogin from '@/components/inputs/inputLogin/inputLogin';
import ActionModal from '@/components/modals/actionModal/actionModal';
import AlertModal from '@/components/modals/alertModal/alertModal';

const TrocarSenha = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword]= useState('')
  const[confirmPassword, setConfirmpassword] =useState('')
  const[showAlertModal, setShowAlertModal]=useState(false)

  const[modalOpen, setModalOpen] = useState(false)
  
    const handleConfirmClick = () => {
      setModalOpen(true);
    }
    const handleMostrarPop=()=>{
      setShowAlertModal(true)
    }

  return (
    <>
      <BasicScreen backgroundColor="transparent">

        <div className={styles.todoConteudo}>
          <div className={styles.container}>
            <div className={styles.perfil}>
              <Image 
                  src="/usuario.png" 
                  alt="Usuário" 
                  width={220} 
                  height={230} 
                  className={styles.imagemUsuario} 
                />
                <p className={styles.textUser}>Jose Santo de Rubia Olivera</p>
            </div>
            <div className={styles.form}>
              <InputLogin 
                  label="Senha" 
                  value={password} 
                  setValue={setPassword} 
                  isPassword={true} 
                   color="white"
                />
              <InputLogin 
                label="Nova senha" 
                value={newPassword} 
                setValue={setNewPassword} 
                isPassword={true} 
                color="white"
              />
              <InputLogin 
                label="Confirmar senha" 
                value={confirmPassword} 
                setValue={setConfirmpassword} 
                isPassword={true} 
                color="white"
              />
            <div className={styles.buttonn}>
            <StandardButton text="CONFIRMAR" hoverColor="var(--cyan)" callback={handleConfirmClick}></StandardButton>
            </div>
             
              
            </div>
          </div>
        </div>

    </BasicScreen >

     <ActionModal
        title="Aviso"
        text="Tem certeza que deseja redefinir senha? "
        bsIcon="bi bi-exclamation-triangle"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        textBtn1="CANCELAR"
        textBtn2="CONFIRMAR"
        callbackB1={()=>console.log("CANCELOU")}
        callbackB2={(handleMostrarPop)}
     />

    <AlertModal
             title="Alterado"
             text="Senha alterada com sucesso!"
             bsIcon="bi-check2-circle"
             isOpen={showAlertModal}
             setIsOpen={setShowAlertModal} 
    
          />
    
    </>
    
  );
};

export default TrocarSenha;
