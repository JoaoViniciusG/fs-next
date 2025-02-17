'use client'
import React, { useState } from 'react';
import styles from "./page.module.css"
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import Image from 'next/image';

const TrocarSenha = () => {
  const [senha, setSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (

        <div className={styles.divContainerMaster}>
      <div className={styles.divContainerContent}>
        <div className={styles.divContentHeader}>
          <img
            src="../pedidos/img/arrow-back.svg"
            className={styles.iconPageBack}
            alt="back-arrow"
            onClick={() => history.back()}
          />
        </div>
        <div className={styles.todoConteudo}>
          <div className={styles.container}>
            <div className={styles.perfil}>
            <Image 
                src="/usuario.png" 
                alt="Usuário" 
                width={220} 
                height={240} 
                className={styles.imagemUsuario} 
                            />
              <p>Jose Santo de Rubia Olivera</p>
            </div>
            <div className={styles.form}>
              <InputLabel
                label="Senha"
                type="password"
                value={senha}
                setValue={setSenha}
                placeholder="Digite sua senha"
                required={true}
              />
              <InputLabel
                label="Nova senha"
                type="password"
                value={novaSenha}
                setValue={setNovaSenha}
                placeholder="Digite a nova senha"
                required={true}
              />
              <InputLabel
                label="Confirmar senha"
                type="password"
                value={confirmarSenha}
                setValue={setConfirmarSenha}
                placeholder="Confirme a nova senha"
                required={true}
              />
              <div className={styles.botao}>
                <button className={styles.button} type="button">CONFIRMAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default TrocarSenha;
