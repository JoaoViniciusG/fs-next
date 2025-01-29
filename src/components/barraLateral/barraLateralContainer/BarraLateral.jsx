"use client"

import BarraLateralModule from '../barraLateralModule/BarraLateralModule';
import styles from './barraLateral.module.css'
import { sideBarConfig } from '../../../../files/sideBarConfig';
import {
    useState
} from 'react';


export default function BarraLateral() {
    const [currentOpened, setCurrentOpened] = useState('')

    return (
        <div className={styles.containerMaster}>
            {sideBarConfig.map((module)=> {
                return (
                    <BarraLateralModule key={module.id} name={module.name} options={module.subOptions} opened={currentOpened} setOpened={setCurrentOpened}/>
                );
            })}
        </div>
    );
}