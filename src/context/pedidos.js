import {
    useState,
    useEffect,
    createContext
} from 'react';

export const PedidosContext = createContext();

export default function PedidosProvider({ children }) {
    const [listaPedidos, setListaPedidos] = useState([]);


    const values = {
        listaPedidos: listaPedidos
    }
    
    return (
        <PedidosContext.Provider value={values}>
            { children }
        </PedidosContext.Provider>
    );
}