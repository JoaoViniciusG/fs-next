"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function PageAdicionarCliente() {
  return (
    <BasicScreen pageTitle="Cadastrar cliente">
      <BorderContainer title = 'Dados pessoais'>
      <div className={styles.div_content_main}>
                    <div className={styles.container_content_dados}>
                        <div className={styles.contaIner_box}>
                          <div>
                            <InputLabel label="Nome:" required={true}  readonly={false} width='50vh' />
                            <InputLabel label="CPF:"  required={true}  readonly={false} width='50vh'/>
                            <InputLabel label="Data de nascimento:" required={true}  readonly={false} width='50vh' />
                          </div>

                          <div>
                            <InputLabel label="Telefone:" required={true}  readonly={false} width='50vh' />
                            <InputLabel label="E-mail:" required={true}  readonly={false} width='50vh' />
                            <InputLabel label="Sexo" required={true}  readonly={false} width='50vh' />
                          </div>   
                        </div>
                    </div>
                </div>
      </BorderContainer>
      <BorderContainer title = 'Endereço'>
      <button type="button" className={styles.btnadicionar}>Adicionar endereço +</button>
      </BorderContainer>
      <div className={styles.divborderfield}>
        <div className={styles.titlesectionfield}>
          <h2>Dados pessoais:</h2>
        </div>

        <div className={styles.containermasterinputfield}>
          <div>
            <div className={styles.containerinputfield}>
              <h3 className={styles.labelinputfield}>Nome:</h3>
              <input className={styles.inputfield} type="text"  />
            </div>

            <div className={styles.containerinputfield}>
              <h3 className={styles.labelinputfield}>CPF:</h3>
              <input className={styles.inputfield} type="text" readOnly />
            </div>

            <div className={styles.containerinputfield}>
              <h3 className={styles.labelinputfield}>Nascimento:</h3>
              <input className={styles.inputfield} type="text" readOnly />
            </div>
          </div>

          <div>
            <div className={styles.containerinputfield}>
              <h3 className={styles.labelinputfield}>Telefone:</h3>
              <input className={styles.inputfield} type="text" readOnly />
            </div>

            <div className={styles.containerinputfield}>
              <h3 className={styles.labelinputfield}>E-mail:</h3>
              <input className={styles.inputfield} type="text" readOnly />
            </div>

            <div className={styles.sexo}>
              <label>Sexo:</label>
              <label><input type="radio" name="sexo" value="feminino" /> Feminino</label>
              <label><input type="radio" name="sexo" value="masculino" /> Masculino</label>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.divborderfield}>
        <div className={styles.titlesectionfield}>
          <h2>Endereço:</h2>
        </div>
        <button type="button" className={styles.btnadicionar}>Adicionar endereço +</button>
      </div>
      <div className={styles.divbuttonscontainer}>
        <StandardButton text="CADASTRAR" hoverColor="#63C7B8" callback={() => { }} />
      </div>
    </BasicScreen>
  );
}