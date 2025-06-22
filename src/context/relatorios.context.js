"use client";

import { getRelatorios } from '@/services/relatorio.service';
import {
    createContext,
    useEffect,
    useState
} from 'react';

import moment from 'moment';

export const RelatorioContext = createContext();

export default function RelatorioProvider({ children }) {
    const [relatorios, setRelatorios] = useState({});
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [displayPeriod, setDisplayPeriod] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [index, setIndex] = useState(0);

    const normalizeDate = (date) => moment(date).format("YYYY-MM-DD");

    const getInfos = async (start, end, startRef, endRef) => {
        setIsLoading(true);

        const response = await getRelatorios(normalizeDate(start), normalizeDate(end), normalizeDate(startRef), normalizeDate(endRef));

        if (response.status == 200) {
            setHasError(false);
            setRelatorios(response.data.payload);
        }
        else {
            setRelatorios({});
            setHasError(true);
        }
        

        setIsLoading(false);
    };

    const getDate = (direction) => {
        let newIndex = index;

        if(direction == true) newIndex = (index == 6) ? 0 : index + 1;
        else if(direction == false) newIndex = (index == 0) ? 6 : index - 1;

        const data = new Date();
        const [dia, diaSemana, mes, ano] = [data.getDate(), data.getDay(), data.getMonth(), data.getFullYear()];
        const ajuste = 6 - diaSemana;

        const periodos = [
            ["HOJE", dia, dia],
            ["ESSA SEMANA", dia - diaSemana, dia + ajuste],
            ["SEMANA PASSADA", dia - diaSemana - 7, dia - diaSemana - 1],
            ["ESSE MÊS", 1, new Date(ano, mes + 1, 0).getDate()],
            ["MÊS PASSADO", 1, new Date(ano, mes, 0).getDate(), mes - 1],
            ["ESSE ANO", new Date(ano, 0, 1), new Date(ano, 11, 31)],
            ["ANO PASSADO", new Date(ano - 1, 0, 1), new Date(ano - 1, 11, 31)]
        ];

        let nome, inicio, fim;

        console.log(newIndex);
        if (newIndex < 5) {
            nome = periodos[newIndex][0];
            const startMes = periodos[newIndex][3] !== undefined ? periodos[newIndex][3] : mes;
            inicio = new Date(ano, startMes, periodos[newIndex][1]);
            fim = new Date(ano, startMes, periodos[newIndex][2]);
        } else {
            [nome, inicio, fim] = periodos[newIndex];
        }

        const duracao = fim.getTime() - inicio.getTime();
        const inicioRef = new Date(inicio.getTime() - duracao - 86400000); // menos 1 dia para não sobrepor
        const fimRef = new Date(fim.getTime() - duracao - 86400000);

        setDisplayPeriod(nome);
        setStartDate(inicio);
        setEndDate(fim);
        
        setIndex(newIndex);
        getInfos(inicio, fim, inicioRef, fimRef);
    };

    const value = {
        displayPeriod,
        relatorios,
        isLoading,
        startDate,
        hasError,
        endDate,
        getInfos,
        getDate
    };

    return (
        <RelatorioContext.Provider value={value}>
            {children}
        </RelatorioContext.Provider>
    )
};