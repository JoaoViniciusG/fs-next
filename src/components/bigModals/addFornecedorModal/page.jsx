import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function AlterarFuncionarioModal({
  isOpen = false,
  setIsOpen = () => {},
  callbackConsultar = () => {},
  callbackConfirmar = () => {},
  title,  // Título agora é opcional
}) {
  return (
    <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          {title && <span>{title}</span>} 
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.divRow}>
            <label className={styles.titleInput}>
              <span>Nome da empresa:</span>
              <input type="text" name="cod-produto" className={`${styles.inputCampo} ${styles.inputCodProduto}`} />
            </label>

            <label className={`${styles.titleInput} ${styles.titleLargo}`}>
              <span>CNPJ:</span>
              <input type="text" name="nome-produto" className={`${styles.inputCampo} ${styles.inputNomeProduto}`} />
            </label>
          </div>

          <div className={styles.divRow}>
            <label className={styles.titleInput}>
              <span>E-mail:</span>
              <input type="text" name="marca" className={`${styles.inputCampo} ${styles.inputMarca}`} />
            </label>

            <SmallButton text="CONSULTAR" callback={() => callbackConsultar()} />

            <SmallButton text="CONFIRMAR" callback={() => {
              callbackConfirmar();
              setIsOpen(false);
            }} />
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.fornecedoresTable}>
            <thead>
              <tr>
                <th>Nome do fornecedor</th>
                <th>CPF / CNPJ</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clara Rogéria</td>
                <td>567.973.093.09</td>
                <td>clara@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.pagina}>
          <span>Pág. 1 </span>
        </div>
      </div>
    </div>
  );
}
