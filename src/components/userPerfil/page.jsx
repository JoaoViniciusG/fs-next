'use client';
import React from 'react';
import InputLabel from '../inputs/inputLabel/inputLabel';
import styles from './page.module.css';
import Image from 'next/image';

export default function PerfilEdicao({ nome, email, cnpj, razaoSocial, telefone, dataCadastro, imagemUrl, onEditar, readonly = false }) {
  return (
    <div className={styles.containerr}>
      <div className={styles.perfil}>
        <Image src="/usuario.png" alt="Usuário" className={styles.imagemUsuario} width={240} height={270} />
        <button className={styles.editar} onClick={onEditar}>Editar</button>
      </div>
      <div className={styles.campos}>
        <InputLabel label="Nome:" value={nome} readonly={readonly} />
        <InputLabel label="E-mail:" value={email} type="email" readonly={readonly} />
        <InputLabel label="CNPJ:" value={cnpj} readonly={readonly} />
        <InputLabel label="Razão social:" value={razaoSocial} readonly={readonly} />
        <InputLabel label="Telefone:" value={telefone} type="tel" readonly={readonly} />
        <InputLabel label="Data de cadastro:" value={dataCadastro} readonly={readonly} />
      </div>
    </div>
  );
}
