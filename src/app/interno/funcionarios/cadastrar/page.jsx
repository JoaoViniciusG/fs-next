"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AddAddressButton from '@/components/buttons/addAddressButton/addAddressButton';
import AlertModal from '@/components/modals/alertModal/alertModal';
import { useEffect, useState, useContext, useDebugValue } from 'react';
import { FuncionarioContext } from '@/context/funcionario.context';
import RadioButton from '@/components/inputs/radioButton/radioButton';
import { useRouter } from 'next/navigation';
import { ApplicationContext } from '@/context/application.context';
import CheckBox from '@/components/inputs/checkbox/checkbox';
import { EnderecoContext } from '@/context/endereco.context';
import AddressOption from '@/components/containers/endereco/addressOption';

export default function PageCadastrarFuncionario() {
  const router = useRouter();
  const applicationContext = useContext(ApplicationContext);
  const context = useContext(FuncionarioContext);
  const contextEndereco = useContext(EnderecoContext);

  const [modalOpen, setModalOpen] = useState(false);

  const [valueDataNascimento, setValueDataNascimento] = useState("");
  const [valueTelefone, setValueTelefone] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueSexo, setValueSexo] = useState("");
  const [valueCPF, setValueCPF] = useState("");

  const [createLogin, setCreateLogin] = useState(false);

  useEffect(() => {
    if (context.funcionarioCadastroId == null) {
      context.novoIdFuncionarioCadastrar();
    }

    contextEndereco.getEnderecos(context.funcionarioCadastroId, 3);
  }, [])

  useEffect(() => {
    if(context.funcionarioCadastroId != null) {
      updateInputs();
    }
  }, [context.funcionarioCadastroId]);

  const updateInputs = () => {
    setValueName(context.funcionarioCadastrar.nome ?? "");
    handleCpfChange(context.funcionarioCadastrar.cpf ?? "");
    handleDateChange(context.funcionarioCadastrar.nascimento != "" ? formatarISOParaNumeros(context.funcionarioCadastrar.nascimento) : "");
    handleEmailChange(context.funcionarioCadastrar.email ?? null);
    handleSexoChange(context.funcionarioCadastrar.sexo ?? "");
    handleTelefoneChange(context.funcionarioCadastrar.telefone ?? "");
  }

  useEffect(() => {
    setValueEmail(createLogin ? "" : null)
  }, [createLogin])

  const submitForm = async () => {
    let funcionario = context.funcionarioCadastrar;

    if (Object.values(funcionario).includes("")) {
      applicationContext.callFail("Preencha todos os campos!");
      return;
    };

    if (!validarCPF()) {
      applicationContext.callFail("Insirá um CPF válido!");
      return;
    }

    let res = await context.cadastrarFuncionario();

    if (res) setModalOpen(true);
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

  function formatarTelefone(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.slice(0, 11);

    if (valor.length === 0) return '';
    if (valor.length < 3) return `(${valor}`;
    if (valor.length < 7) return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    if (valor.length < 11) return `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6)}`;
    return `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}-${valor.slice(7)}`;
  }

  function formatarISOParaNumeros(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}${mes}${ano}`;
  }

  function formatarDataParaISO(data) {
    if (data.length < 10) return "";
    const [dia, mes, ano] = data.split('/');
    let formatado = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    return formatado;
  }

  const handleDateChange = (value) => {
    const valorFormatado = formatarData(value);
    setValueDataNascimento(valorFormatado);
    context.funcionarioCadastrar.nascimento = formatarDataParaISO(valorFormatado);
  };

  const handleCpfChange = (value) => {
    const valorFormatado = formatarCPF(value);
    setValueCPF(valorFormatado);
    context.funcionarioCadastrar.cpf = valorFormatado.replace(/\D/g, '');
  };

  const handleTelefoneChange = (value) => {
    const valorFormatado = formatarTelefone(value);
    setValueTelefone(valorFormatado);
    context.funcionarioCadastrar.telefone = valorFormatado.replace(/\D/g, '');
  };

  const handleNomeChange = (value) => {
    setValueName(value);
    context.funcionarioCadastrar.nome = value;
  };

  const handleEmailChange = (value) => {
    setValueEmail(value);
    context.funcionarioCadastrar.email = value;
  };

  const handleSexoChange = (value) => {
    setValueSexo(value);
    context.funcionarioCadastrar.sexo = value;
  };

  function validarCPF() {
    let cpf = valueCPF.replace(/\D/g, '');

    if (cpf.length !== 11) return false;

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
                    setValue={handleNomeChange}
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
                    setValue={handleTelefoneChange}
                    required={true}
                    readonly={false}
                    width='50vh' />

                  <InputLabel
                    placeholder="email@gmail.com"
                    label="E-mail:"
                    value={valueEmail == null ? "" : valueEmail}
                    setValue={handleEmailChange}
                    required={true}
                    readonly={false}
                    disabled={!createLogin}
                    width='50vh' />
                  <div className={styles.sexoContainer}>
                    <label>Sexo:</label> <br></br>
                    <div className={styles.containerGender}>
                      <RadioButton
                        radioGroup="GenderGroup"
                        valueName="F"
                        selectedOption={valueSexo}
                        handleOptionChange={handleSexoChange}
                        text="Feminino"
                        textInLeft={false} />

                      <RadioButton
                        radioGroup="GenderGroup"
                        valueName="M"
                        selectedOption={valueSexo}
                        handleOptionChange={handleSexoChange}
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
          <div className={styles.containerEnderecos}>
            <AddAddressButton option={`3--${context.funcionarioCadastroId}`} />

            {(contextEndereco.enderecosByRef.length > 0) ? contextEndereco.enderecosByRef.map((item) => (
              <AddressOption
                key={item.id}
                id={item.id}
                logradouro={item.logradouro}
                numero={item.numero}
                bairro={item.bairro}
                cidade={item.cidade}
                UF={item.estado}
              />
            )) : null}
          </div>
        </BorderContainer>
        <div className={styles.bottomElements}>
          <CheckBox
            text="Permitir Login"
            value={createLogin}
            setValue={setCreateLogin}
          />

          <StandardButton
            text={(createLogin) ? "CONFIGURAR PERMISSÕES" : "CADASTRAR"}
            hoverColor="#63C7B8"
            style={{ alignSelf: "end", marginTop: 30 }}
            callback={submitForm} />
        </div>
      </BasicScreen>
      <AlertModal
        title='CADASTRADO'
        text='Funcionário cadastrado com sucesso! '
        bsIcon="bi-check2-circle"
        callback={router.back}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      />
    </>
  );
}