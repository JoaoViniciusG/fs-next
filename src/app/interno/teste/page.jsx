import StandardButton from '@/components/buttons/stardardButton/StandardButton';
import styles from './page.module.css';

export default function Teste() {
    return (
        <div className={styles.divContainerMaster}>
        <div className={styles.divContainerContent}>
            <div className={styles.divContentHeader}>
                
                <h1 className={styles.titleMaster}>Cadastrar cliente</h1>
            </div>

            <div className={styles.divContentMaster}>
                <div className={styles.divBorderField}>
                    <div className={styles.titleSectionField}>
                        <h2>Dados pessoais:</h2>
                    </div>

                    <div className={styles.containerMasterInputField}>
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

                    </div>
                </div>
                <div className={styles.divBorderField}>
                    <div className={styles.titleSectionField}>
                        <h2>Endereço:</h2>
                    </div>
                    <button type="button" className={styles.btnAdicionar}>Adicionar endereço +</button>
                </div>

                <StandardButton text="CADASTRAR"/>
            </div>
        </div>
    </div>
    )
}