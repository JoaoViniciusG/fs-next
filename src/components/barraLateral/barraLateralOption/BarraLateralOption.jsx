import Link from 'next/link';
import styles from './BarraLateralOption.module.css'

export default function BarraLateralOption({ optionName, optionRoute }) {
    return (
        <Link href={optionRoute} className={styles.containerMaster}>
            <i className="bi bi-arrow-return-right"></i>
            <p>{optionName}</p>
        </Link>
    );
}