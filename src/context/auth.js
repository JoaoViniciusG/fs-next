"use client"

import {
    createContext,
    useEffect,
    useState
} from 'react';
import { loginAsync, logoutAsync } from '@/services/auth.service';
import { redirect } from 'next/navigation';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [permissionJson, setPermissionJson] = useState({});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [email, setEmail] = useState({});
    const [verified, setVerified] = useState(false);

    const login = async (email, senha) => {
        const response = await loginAsync(email, senha);
        console.log(response)

        if(response == false || response.status != 200) {
            setIsAuth(false);
            setEmail({});
            setIsError(true);
            setErrorMessage("");
            localStorage.removeItem('sideBarConfig');
            return false;
        }

        setIsAuth(true);
        setIsError(false);
        setErrorMessage("");
        localStorage.setItem('sideBarConfig', JSON.stringify(response.data.payload.permissions));
        setEmail(response.data.payload.email);
        redirect('/interno');
    }

    const logout = async () => {
        await logoutAsync();

        setIsAuth(false);
        setEmail({});
        setIsError(true);
        setErrorMessage("");
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