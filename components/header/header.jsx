import {
} from 'react';

import styles from './header.module.css';
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.containerMaster}>
            <Image 
                src='/LogoEstoTech-Horizontal.png'
                objectFit="cover"
                fill
                alt='Logo horizontal EstoTech'
            />
            
            <div>

            </div>
        </div>
    );
}