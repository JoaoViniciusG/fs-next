"use client"

import { getPedidos } from '@/services/pedidos.service';
import {
    createContext,
    useState
} from 'react';

export const PedidosContext = createContext();

export default function PedidosProvider({ children }) {
    const [pedidos, setPedidos] = useState([]);

    const receberPedidos = async () => {
        const response = await getPedidos();

        if(response == false || response.status != 200) {
            console.log("Deu erro, corrija essa merda!");
            return;
        }

        setPedidos(response.data.payload);
    };

    const values = {
        pedidos: pedidos,
        receberPedidos: receberPedidos
    };

    return (
        <PedidosContext.Provider value={values}>
            { children }
        </PedidosContext.Provider>
    );
}