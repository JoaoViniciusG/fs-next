"use client";

import { getRelatorios } from '@/services/relatorio.service';
import {
    createContext,
    useState
} from 'react';

export const RelatorioContext = createContext();

export default function RelatorioProvider({ children }) {
    const [relatorios, setRelatorios] = useState({});
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getInfos = async () => {
        setIsLoading(true);

        const response = await getRelatorios();

        if (response.status == 200) {
            setHasError(false);
            setRelatorios(response.data.payload);
        }
        else setHasError(true);

        setIsLoading(false);
    };

    const value = {
        relatorios,
        isLoading,
        hasError,
        getInfos
    };

    return (
        <RelatorioContext.Provider value={value}>
            { children }
        </RelatorioContext.Provider>
    )
}



const getDate = (data) => {
    let diaSemana = data.getDay();
    const ajusteSemanaFim = (6 - diaSemana);
    const ano = data.getFullYear();
    const mes = data.getMonth();
    const dia = data.getDate();

    return {
        "HOJE": [data, data],
        "ESSA SEMANA": [new Date(ano, mes, dia - diaSemana), new Date(ano, mes, dia + ajusteSemanaFim)],
        "SEMANA PASSADA": []
    }
}