import SmallContainer from '@/components/internoInicio/smallContainer/smallContainer';
import styles from './page.module.css';
import AddressOption from '@/components/containers/endereco/addressOption';

export default function PageInternoInicio() {
  return (
    <div className={styles.containerMaster}>
      <div className={styles.containerTitle}>
        <div/>
        <h1>Resumo de vendas</h1>
        <div/>
      </div>

      <div className={styles.containerContentMain}>
        <AddressOption id={10} logradouro="Av. Rio Branco" numero={1890} bairro="Centro" cidade="Vilhena" UF="RO"/>
      </div>
    </div>
  );
}