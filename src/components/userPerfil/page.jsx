'use client';
import React from 'react';
import InputLabel from '../inputs/inputLabel/inputLabel';
import styles from './page.module.css';
import Image from 'next/image';

function formatDateToInput(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default function PerfilEdicao({
  nome, email, cnpj, razaoSocial, telefone, dataCadastro, 
  imagemUrl, onEditar, readonly = false, 
  setNome = () => {}, setEmail = () => {}, setCnpj = () => {},
  setRazaoSocial = () => {}, setTelefone = () => {}, setDataCadastro = () => {}
}) {
  return (
    <div className={styles.containerr}>
      {/* <div className={styles.perfil}>
        <Image src="/usuario.png" alt="Usuário" className={styles.imagemUsuario} width={240} height={240} />
        <button className={styles.editar} onClick={onEditar}>Editar</button>
      </div> */}
      <div className={styles.campos}>
        <InputLabel label="Nome:" value={nome} readonly={readonly} setValue={setNome} />
        <InputLabel label="E-mail:" value={email} type="email" readonly={readonly} setValue={setEmail} />
        <InputLabel label="CNPJ:" value={cnpj} readonly={readonly} setValue={setCnpj} />
        <InputLabel label="Razão social:" value={razaoSocial} readonly={readonly} setValue={setRazaoSocial} />
        <InputLabel label="Telefone:" value={telefone} type="tel" readonly={readonly} setValue={setTelefone} />
        <InputLabel
          label="Data de cadastro:"
          value={dataCadastro ? formatDateToInput(dataCadastro) : ''}
          type="date"
          readonly={readonly}
          setValue={setDataCadastro}
        />
      </div>
    </div>
  );
}
