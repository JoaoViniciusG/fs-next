"use client"

import BarraLateralModule from '../barraLateralModule/BarraLateralModule';
import styles from './barraLateral.module.css'
import {
    useState,
    useContext
} from 'react';

import { AuthContext } from '@/context/auth';


export default function BarraLateral() {
    const context = useContext(AuthContext);
    const [currentOpened, setCurrentOpened] = useState('');

    return (
        <div className={styles.containerMaster}>
            {context.permissionJson.filter(m => m.isVisible).map((module)=> {
                return (
                    <BarraLateralModule key={module.id} name={module.description} options={module.permissions} opened={currentOpened} setOpened={setCurrentOpened}/>
                );
            })}
        </div>
    );
}