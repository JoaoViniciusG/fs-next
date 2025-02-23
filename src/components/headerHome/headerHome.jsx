'use client';

import styles from './headerHome.module.css';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from 'react-feather';

export default function HeaderHome() {
    return (
        <header>
            <nav className={styles.nav_home}>
                <div className={styles.div_nav}>
                    <div className={styles.logo_nav}>
                        <a href="/"><img src="/logo/EstoTech_Logo.png" alt="Logo EstoTech" className={styles.logo}/></a>
                    </div>
                    <ul className={styles.nav_menu}>
                        <li><Link href="#section_plans">Planos e Preços</Link></li>
                        <li><Link href="#fale_conosco">Fala Conosco</Link></li>
                        <li><Link href="#sobre_estotech">Sobre</Link></li>
                    </ul>
                    <div className={styles.button_login}>
                        <Link href="/login" className={styles.button_entrar}><Icon.User className={styles.svg_color_nav}/><span>Entrar</span></Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}