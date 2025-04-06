"use client";

import styles from './page.module.css';

import {
  useState,
  useContext
} from 'react';

import { useRouter } from 'next/navigation';

import ShineButton from '@/components/buttons/shineButton/shineButton';
import InputLogin from '@/components/inputs/inputLogin/inputLogin';
import StandardButton from '@/components/buttons/standardButton/standardButton';
import { AuthContext } from '@/context/auth';

export default function LoginPage() {
  const authContextInstance = useContext(AuthContext);
  const router = useRouter();
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("");

  const submitFunction = async () => {
    await authContextInstance.login(user, password)
  };

  return (
    <div className={styles.containerMaster}>
      <div className={styles.containerLeft}>
        <img
          className={styles.imageLogo}
          src='/logo/Logo_Vertical_SF.png' />

        <h2 className={styles.titleLeft}>Ainda não é cliente?</h2>

        <ShineButton 
          text="Entre em contato" 
          backgroundColor="var(--bold-darkgreen)" 
          fontColor="var(--white)"
          callback={() => router.push("/#fale_conosco")}/>

        <p className={styles.textContent}>
          Descubra como nosso sistema de gerenciamento de estoque e pessoas pode <span>transformar</span> seu <span>negócio!</span>
        </p>
      </div>


      <div className={styles.containerRight}>
        <h1 className={styles.loginTitle}>Login</h1>

        <div className={styles.containerContent}>
          <div className={styles.inputsContainer}>
            <InputLogin color="var(--white)" label="Usuário:" placeholder="example@gmail.com" value={user} setValue={setUser} />
            <InputLogin color="var(--white)" label="Senha:" placeholder="senha aqui..." value={password} setValue={setPassword} isPassword={true} />
          </div>
        </div>

        <StandardButton text="ENTRAR" hoverColor="var(--medium-darkcyan)" callback={submitFunction} />
      </div>
    </div>
  )
}