import styles from './footer.module.css'
import StandardButton from '@/components/buttons/standardButton/standardButton'

export default function Footer () {
    return(
        <div className={styles.baixo}>
          <div className={styles.divTagBottom}>
            <p>Código do pedido:</p>
            <span>N° 000</span>
          </div>
          <StandardButton text="CRIAR PEDIDO" hoverColor="var(--cyan)" callback={handleConfirmClick} />
          <StandardButton text="CANCELAR" hoverColor="var(--cyan)" callback={handleConfirmClick} />
        </div>
    )
}

