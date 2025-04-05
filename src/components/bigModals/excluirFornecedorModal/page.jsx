import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function ExcluirFornecedor({ 
    isOpen = false, 
    setIsOpen = () => {}, 
    callbackCancelar = () => {}, 
    callbackConfirmar = () => {},
    bsIcon,
    title,
    text
}) {
  return (
    <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.modalContainer}>
        <div className={styles.titleContainer}>
          <i className={`bi ${bsIcon} ${styles.iconTitle}`}></i>
          <p className={styles.titleText}>{title}</p>
        </div>
        
        <div className={styles.textContainer}>
          <p>{text}</p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.fornecedoresTable}>
            <thead>
              <tr>
                <th colSpan="5">Visualização</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Josimar Fernandes</td>
                <td>12.758.982/0001.14</td>
                <td>josimarPedro@dell.com.br</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.buttonGroup}>
          <SmallButton text="CANCELAR" callback={() => {setIsOpen(false);}} />
          <SmallButton text="CONFIRMAR" callback={() => { callbackConfirmar(); setIsOpen(false); }} />
        </div>

        <div className={styles.pagina}>
          <span>Pág. 1</span>
        </div>
      </div>
    </div>
  );
}
