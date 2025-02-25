import styles from './addAddressButton.module.css';
import { useRouter } from 'next/navigation';

export default function AddAddressButton(className, style, callback = () => { }) {
  const router = useRouter();
  
  return (
    <button
      className={`${styles.button} ${className}`}
      style={style}
      onClick={() => router.push("/interno/endereco/cadastrar")}>
      Adicionar Endereço

      <i className={`bi bi-plus ${styles.icon}`}></i>
    </button>
  );
}