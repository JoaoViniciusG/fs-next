"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AddAddressButton from '@/components/buttons/addAddressButton/addAddressButton';
import AlertModal from '@/components/modals/alertModal/alertModal';
import { useEffect, useState, useContext } from 'react';
import { FuncionarioContext } from '@/context/funcionario.context';
import RadioButton from '@/components/inputs/radioButton/radioButton';
import { useRouter } from 'next/navigation';
import { ApplicationContext } from '@/context/application.context';

export default function PageCadastrarFuncionario() {
  const router = useRouter();
  const applicationContext = useContext(ApplicationContext);
  const context = useContext(FuncionarioContext);
  const [modalOpen, setModalOpen] = useState(false);

  const [valueDataNascimento, setValueDataNascimento] = useState("");
  const [valueTelefone, setValueTelefone] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueSexo, setValueSexo] = useState("");
  const [valueCPF, setValueCPF] = useState("");

  useEffect(() => {
    context.novoIdFuncionarioCadastrar();
  }, [])

  const submitForm = () => {
    let funcionario = {
      cpf: valueCPF,
      sexo: valueSexo,
      nome: valueName,
      email: valueEmail,
      telefone: valueTelefone,
      nascimento: valueDataNascimento
    };

    if (Object.values(funcionario).includes("")) {
      applicationContext.callFail("Preencha todos os campos!");
      return;
    };

    if (!validarCPF()) {
      applicationContext.callFail("Insirá um CPF válido!");
      return;
    }

    context.setFuncionarioCadastrar(funcionario);
    router.push("/interno/permissao");
  };

  function formatarCPF(cpf) {
    return cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  function formatarData(valor) {
    return valor
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d+)/, '$1');
  }

  const handleDateChange = (value) => {
    const valorFormatado = formatarData(value);
    setValueDataNascimento(valorFormatado);
  };

  const handleCpfChange = (value) => {
    const valorFormatado = formatarCPF(value);
    setValueCPF(valorFormatado);
  };

  function validarCPF() {
    let cpf = valueCPF.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) return false;

    // Rejeita CPFs com todos os dígitos iguais (ex: 000.000.000-00, 111...)
    if (/^(\d)\1+$/.test(cpf)) return false;

    const calcularDigito = (base, pesoInicial) => {
      let soma = 0;
      for (let i = 0; i < base.length; i++) {
        soma += parseInt(base[i]) * (pesoInicial - i);
      }
      const resto = soma % 11;
      return (resto < 2) ? '0' : String(11 - resto);
    };

    const noveDigitos = cpf.substring(0, 9);
    const digito1 = calcularDigito(noveDigitos, 10);
    const digito2 = calcularDigito(noveDigitos + digito1, 11);

    return cpf === noveDigitos + digito1 + digito2;
  }

  return (
    <>
      <BasicScreen pageTitle="Cadastrar funcionário">
        <BorderContainer title='Dados pessoais'>
          <div className={styles.div_content_main}>
            <div className={styles.container_content_dados}>
              <div className={styles.container_box}>
                <div>
                  <InputLabel
                    placeholder="Nome"
                    label="Nome:"
                    value={valueName}
                    setValue={setValueName}
                    required={true}
                    readonly={false}
                    width='50vh' />

                  <InputLabel
                    placeholder="000.000.000-00"
                    label="CPF:"
                    value={valueCPF}
                    setValue={handleCpfChange}
                    required={true}
                    readonly={false}
                    maxLength={14}
                    width='50vh' />

                  <InputLabel
                    placeholder="dd/mm/aaaa"
                    label="Data de nascimento:"
                    value={valueDataNascimento}
                    setValue={handleDateChange}
                    required={true}
                    readonly={false}
                    width='50vh' />
                </div>
                <div>
                  <InputLabel
                    placeholder="(DDD) 0 0000-0000"
                    label="Telefone:"
                    value={valueTelefone}
                    setValue={setValueTelefone}
                    required={true}
                    readonly={false}
                    width='50vh' />

                  <InputLabel
                    placeholder="email@gmail.com"
                    label="E-mail:"
                    value={valueEmail}
                    setValue={setValueEmail}
                    required={true}
                    readonly={false}
                    width='50vh' />
                  <div className={styles.sexoContainer}>
                    <label>Sexo:</label> <br></br>
                    <div className={styles.containerGender}>
                      <RadioButton
                        radioGroup="GenderGroup"
                        valueName="F"
                        selectedOption={valueSexo}
                        handleOptionChange={setValueSexo}
                        text="Feminino"
                        textInLeft={false} />

                      <RadioButton
                        radioGroup="GenderGroup"
                        valueName="M"
                        selectedOption={valueSexo}
                        handleOptionChange={setValueSexo}
                        text="Masculino"
                        textInLeft={false} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderContainer>
        <BorderContainer title='Endereço'>
          <AddAddressButton />
        </BorderContainer>
        <StandardButton text="CONFIGURAR PERMISSÕES" hoverColor="#63C7B8" style={{ alignSelf: "end", marginTop: 30 }} callback={submitForm} />
      </BasicScreen>
      <AlertModal
        title='CADASTRADO'
        text='Funcionário cadastrado com sucesso! '
        bsIcon="bi-check2-circle"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      />
    </>
  );
}