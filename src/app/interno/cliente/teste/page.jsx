"use client"

import StandardButton from '@/components/buttons/stardardButton/StandardButton';
import styles from './page.module.css';
import BorderContainer from '@/components/containers/borderContainer/page';


export default function Teste() {
    return (
        <div className={styles.divContainerMaster}>
        <div className={styles.divContainerContent}>
            <div className={styles.divContentHeader}>
                
                <h1 className={styles.titleMaster}>Cadastrar cliente</h1>
            </div>

            <div className={styles.divContentMaster}>
                <BorderContainer title="Dados do cliente:">
                        <div>
                            <div className={styles.containerInputField}>
                                <h3 className={styles.labelInputField}>Nome:</h3>
                                <input className={styles.inputField} type="text" readOnly />
                            </div>

                            <div className={styles.containerInputField}>
                                <h3 className={styles.labelInputField}>CPF:</h3>
                                <input className={styles.inputField} type="text" readOnly />
                            </div>

                            <div className={styles.containerInputField}>
                                <h3 className={styles.labelInputField}>Nascimento:</h3>
                                <input className={styles.inputField} type="text" readOnly />
                            </div>
                        </div>

                        <div>
                            <div className={styles.containerInputField}>
                                <h3 className={styles.labelInputField}>Telefone:</h3>
                                <input className={styles.inputField} type="text" readOnly />
                            </div>

                            <div className={styles.containerInputField}>
                                <h3 className={styles.labelInputField}>E-mail:</h3>
                                <input className={styles.inputField} type="text" readOnly />
                            </div>

                            <div className={styles.sexo}>
                                <label>Sexo:</label>
                                <label><input type="radio" name="sexo" value="feminino" /> Feminino</label>
                                <label><input type="radio" name="sexo" value="masculino" /> Masculino</label>
                            </div>
                        </div>
                </BorderContainer>
                <BorderContainer title="Endereço">
                    <button type="button" className={styles.btnAdicionar}>Adicionar endereço +</button>
                </BorderContainer>

                <StandardButton text="CADASTRAR" hoverColor="#63C7B8"/>
            </div>
        </div>
    </div>
    )
}