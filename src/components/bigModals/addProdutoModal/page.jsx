import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function AdicionarProdutoModal({
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
              <span>Cód. do Produto:</span>
              <input type="text" name="cod-produto" className={`${styles.inputCampo} ${styles.inputCodProduto}`} />
            </label>

            <label className={`${styles.titleInput} ${styles.titleLargo}`}>
              <span>Nome do Produto / Modelo:</span>
              <input type="text" name="nome-produto" className={`${styles.inputCampo} ${styles.inputNomeProduto}`} />
            </label>
          </div>

          <div className={styles.divRow}>
            <label className={styles.titleInput}>
              <span>Marca:</span>
              <input type="text" name="marca" className={`${styles.inputCampo} ${styles.inputMarca}`} />
            </label>

            <SmallButton text="CONSULTAR" callback={() => callbackConsultar()} />

            <label className={styles.titleInput}>
              <span>Quantidade Desejada:</span>
              <input type="text" name="quantidade" className={styles.inputCampo} />
            </label>

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
                <th>Cód. Produto</th>
                <th>Nome do Produto/Modelo</th>
                <th>Marca</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>99000-0</td>
                <td>Placa mãe</td>
                <td>Gigabyte</td>
                <td>102</td>
                <td>300.000</td>
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
