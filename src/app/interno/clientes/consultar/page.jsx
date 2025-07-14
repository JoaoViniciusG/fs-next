"use client";

import styles from './page.module.css';
import * as Icon from 'react-feather';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import { useRouter } from 'next/navigation';

export default function PageConsultarClientes() {
    const router = useRouter();
    return (
        <BasicScreen pageTitle="Consultar cliente">
            <BorderContainer title="Consultar cliente:">
                <div className={styles.div_contener_main}>
                    <div className={styles.filter_dados}>
                        <div className={styles.button_filter}>
                            <p className={styles.filter_text}>Filtro: </p>
                            <Icon.Filter className={styles.icon_filter} />
                        </div>
                    </div>
                    <div className={styles.div_content_busca}>
                        <InputLabel label="Buscar o cliente:" type="search" placeholder="Nome do cliente" required={false} readonly={false} width='100vh' />
                        <StandardButton text="BUSCAR" hoverColor="var(--cyan)" />
                    </div>
                </div>
            </BorderContainer>
            <BorderContainer className={styles.containerClientes} title="Clientes:">
                <div className={styles.content_table}>
                    <table className={styles.table_fornecedores}>
                        <thead className={styles.table_header}>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">CPF</th>
                                <th scope="col">Data de Nascimento</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Sexo</th>
                            </tr>
                        </thead>
                        <tbody className={styles.table_body}>
                            <tr onClick={() => router.push('/interno/clientes/visualizar')}>
                                <td>Beatriz Alves</td>
                                <td>091.846.297-98</td>
                                <td>09/10/2004</td>
                                <td>(87) 99018-0098</td>
                                <td>Feminino</td>
                            </tr>
                            <tr>
                                <td>Josana Silva</td>
                                <td>091.846.297-98</td>
                                <td>09/10/2004</td>
                                <td>(87) 99018-0098</td>
                                <td>Feminino</td>
                            </tr>
                            <tr>
                                <td>Marcos Souza</td>
                                <td>091.846.297-98</td>
                                <td>09/10/2004</td>
                                <td>(87) 99018-0098</td>
                                <td>Masculino</td>
                            </tr>
                            <tr>
                                <td>Pedro Alves</td>
                                <td>091.846.297-98</td>
                                <td>09/10/2004</td>
                                <td>(87) 99018-0098</td>
                                <td>Masculino</td>
                            </tr>
                            <tr>
                                <td>Ana Sousa</td>
                                <td>091.846.297-98</td>
                                <td>09/10/2004</td>
                                <td>(87) 99018-0098</td>
                                <td>Feminino</td>
                            </tr>
                            <tr>
                                <td>Laís Pedrosa</td>
                                <td>091.846.297-98</td>
                                <td>09/10/2004</td>
                                <td>(87) 99018-0098</td>
                                <td>Feminino</td>
                            </tr>
                            <tr>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>
                                <td>09/10/2004</td>
                                <td>(87) 99018-0098</td>
                                <td>Masculino</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BorderContainer>
        </BasicScreen>
    )
}