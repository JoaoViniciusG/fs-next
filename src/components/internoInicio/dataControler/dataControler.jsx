import { useContext, useEffect } from 'react';
import styles from './dataControler.module.css';

import moment from 'moment';
import { RelatorioContext } from '@/context/relatorios.context';

export default function DataControler() {
  const context = useContext(RelatorioContext);

  return (
    <div className={styles.containerMaster}>
      <h2 className={styles.containerTitle}>Período</h2>

      <div className={styles.containerContent}>
        <a
          onClick={() => context.getDate(false)}
          className={styles.chevronIcon}>

          <i className={`bi bi-chevron-left`}></i>
        </a>

        <p className={styles.contentText}>{context.displayPeriod}</p>

        <a
          onClick={() => context.getDate(true)}
          className={styles.chevronIcon}>

          <i className={`bi bi-chevron-right`}></i>
        </a>
      </div>

      <div className={styles.dateContainer}>
        <div className={styles.dateContent}>
          <h3>Data inicial:</h3>
          <p>{moment(context.startDate).format('DD/MM/YYYY')}</p>
        </div>
        <div className={styles.dateContent}>
          <h3>Data final:</h3>
          <p>{moment(context.endDate).format('DD/MM/YYYY')}</p>
        </div>
      </div>
    </div>
  );
}