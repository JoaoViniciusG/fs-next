"use client"

import BarraLateralModule from '../barraLateralModule/BarraLateralModule';
import styles from './barraLateral.module.css'
import {
    useEffect,
    useState
} from 'react';


export default function BarraLateral() {
    const [currentOpened, setCurrentOpened] = useState('');
    const [permissions, setPermissions] = useState(null);

    useEffect(() => {
        let storageConfig = localStorage.getItem('sideBarConfig');

        if(storageConfig != null) {
            setPermissions(JSON.parse(storageConfig));
        }
    }, [])

    return (
        <div className={styles.containerMaster}>
            {(permissions != null && permissions.length > 0) ? permissions.filter(m => m.isVisible).map((module)=> {
                return (
                    <BarraLateralModule key={module.id} name={module.description} options={module.permissions} opened={currentOpened} setOpened={setCurrentOpened}/>
                );
            }) : null}
        </div>
    );
}