import CheckBox from '@/components/inputs/checkbox/checkbox';
import styles from './pernissionOption.module.css';
import { useEffect, useState } from 'react';

export default function PermissionOption({ element }) {
  const [consultSelected, setConsultSelected] = useState(element.consult);
  const [createSelected, setCreateSelected] = useState(element.create);
  const [changeSelected, setChangeSelected] = useState(element.change);
  const [deleteSelected, setDeleteSelected] = useState(element.delete);
  const [headerEnabled, setHeaderEnabled] = useState(element.cardEnabled);
  const [enabledOptions, setEnabledOptions] = useState(element.cardOptionsEnabled);

  useEffect(() => {
    setHeaderEnabled(element.cardEnabled);
    if(!element.cardEnabled) setEnabledOptions(false);
    else if(element.cardEnabled &&  consultSelected) setEnabledOptions(true);

    setEnabledOptions(element.cardOptionsEnabled);

    setConsultSelected(element.consult);
    setCreateSelected(element.create);
    setChangeSelected(element.change);
    setDeleteSelected(element.delete);
  }, [element])

  useEffect(() => {
    setEnabledOptions(consultSelected && headerEnabled);
  }, [consultSelected])
  return (
    <div className={styles.containerMaster}>
      <div 
        style={{opacity: headerEnabled ? 1 : .5}} 
        className={styles.optionTitle}>
        <CheckBox 
          text={element.name} 
          className={styles.checkOptionHeader} 
          disabled={!headerEnabled} 
          value={consultSelected} 
          setValue={setConsultSelected}/>
      </div>

      <div 
        style={{opacity: enabledOptions ? 1 : .5}}
        className={styles.optionsContainer}>
        <CheckBox 
          text="Consultar" 
          value={consultSelected} 
          disabled={true} 
          setValue={setConsultSelected} 
          className={styles.checkOption}/>
      
        <div className={styles.containerOptionsInside}>
          <CheckBox 
            text="Criar" 
            value={createSelected} 
            disabled={!enabledOptions} 
            setValue={setCreateSelected} 
            className={styles.checkOption}/>

          <CheckBox 
            text="Alterar" 
            value={changeSelected} 
            disabled={!enabledOptions} 
            setValue={setChangeSelected} 
            className={styles.checkOption}/>

          <CheckBox 
            text="Excluir" 
            value={deleteSelected} 
            disabled={!enabledOptions} 
            setValue={setDeleteSelected} 
            className={styles.checkOption}/>
        </div>
      </div>
    </div>
  );
}