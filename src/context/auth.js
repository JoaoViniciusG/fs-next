"use client"

import {
    createContext,
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
    const [user, setUser] = useState({});
    const [verified, setVerified] = useState(false);

    const login = async (user, password) => {
        const response = await loginAsync(user, password);

        if(response == false || response.status != 200) {
            setIsAuth(false);
            setUser({});
            setIsError(true);
            setErrorMessage("");
            localStorage.removeItem('sideBarConfig');
            return false;
        }

        setIsAuth(true);
        setIsError(false);
        setErrorMessage("");
        localStorage.setItem('sideBarConfig', JSON.stringify(response.data.payload.permissions));
        setUser(response.data.payload.user);
        redirect('/interno');
    }

    const logout = async () => {
        const response = await logoutAsync();

        setIsAuth(false);
        setUser({});
        setIsError(true);
        setErrorMessage("");
        localStorage.removeItem('sideBarConfig');
        redirect('/login');
    }

    const values = {
        permissionJson: permissionJson,
        isAuth: isAuth,
        user: user,
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    );
}