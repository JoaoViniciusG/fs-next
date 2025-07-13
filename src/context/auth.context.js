"use client"

import {
    createContext,
    useState,
    useContext
} from 'react';
import { loginAsync, logoutAsync } from '@/services/auth.service';
import { ApplicationContext } from './application.context';
import { redirect } from 'next/navigation';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const applicationContext = useContext(ApplicationContext);

    const [permissionJson, setPermissionJson] = useState({});
    const [isAuth, setIsAuth] = useState(false);
    const [email, setEmail] = useState({});
    const [verified, setVerified] = useState(false);

    const login = async (email, senha) => {
        const response = await loginAsync(email, senha);

        if(response == false || response.status != 200) {
            setIsAuth(false);
            setEmail({});
            callError("Falha ao realizar login!")
            localStorage.removeItem('sideBarConfig');
            return false;
        }

        setIsAuth(true);
        localStorage.setItem('sideBarConfig', JSON.stringify(response.data.payload.permissions));
        setEmail(response.data.payload.email);
        redirect('/interno');
    }

    const logout = async () => {
        await logoutAsync();

        setIsAuth(false);
        setEmail({});
        localStorage.removeItem('sideBarConfig');
        redirect('/login');
    }

    const values = {
        permissionJson: permissionJson,
        isAuth: isAuth,
        email: email,
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    );
}