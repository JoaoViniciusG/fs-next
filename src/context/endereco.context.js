import {
    createContext
} from 'react';

export const EnderecoContext = createContext();

export default function EnderecoProvider({ children }) {
    const values = {
        
    }

    return (
        <EnderecoContext.Provider value={values}>
            { children }
        </EnderecoContext.Provider>
    )
}