import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function ExcluirProduto({ 
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
                <td>00001</td>
                <td>Monitor 15</td>
                <td>HP</td>
                <td>180</td>
                <td>R$520,00</td>
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
