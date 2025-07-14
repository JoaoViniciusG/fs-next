import Link from 'next/link';
import styles from './BarraLateralOption.module.css'
import { ApplicationContext } from '@/context/application.context';
import { useContext } from 'react';

export default function BarraLateralOption({ optionName, optionRoute }) {
    const applicationContext = useContext(ApplicationContext);

    return (
        <Link 
            onClick={() => applicationContext.loadingPageDefine(true)} 
            href={`/interno${optionRoute}`} 
            className={styles.containerMaster}>

            <i className="bi bi-arrow-return-right"></i>
            <p>{optionName}</p>
        </Link>
    );
}