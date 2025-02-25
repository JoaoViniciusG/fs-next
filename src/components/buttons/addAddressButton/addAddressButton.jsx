import styles from './addAddressButton.module.css';

export default function AddAddressButton(className, style, callback = () => { }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={style}>
      Adicionar Endereço

      <i className={`bi bi-plus ${styles.icon}`}></i>
    </button>
  );
}