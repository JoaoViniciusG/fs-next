"use client"

import {
    createContext,
    useEffect,
    useState
} from 'react';
import { loginAsync, verifyAsync } from '@/services/auth.service';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [permissionJson, setPermissionJson] = useState({});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});
    const [verified, setVerified] = useState(false);

    const verify = async () => {
        if(verified) return isAuth;
        setVerified(true);

        const response = await verifyAsync();

        if(!response.ok) {
            setIsAuth(false);
            setUser({});
            setIsError(false);
            setErrorMessage("");
            return false;
        };

        setIsAuth(true);
        setIsError(false);
        setErrorMessage("");
        setUser((await response.json()).payload);
        return true;
    }

    const login = async (user, password) => {
        const response = await loginAsync(user, password);

        if(!response.ok) {
            setIsAuth(false);
            setUser({});
            setIsError(true);
            setErrorMessage((await response.json()).error.message);
            return false;
        }

        setIsAuth(true);
        setIsError(false);
        setErrorMessage("");
        setUser((await response.json()).payload);
        return true;
    }

    const values = {
        permissionJson: permissionJson,
        isAuth: isAuth,
        user: user,
        login: login,
        verify: verify
    };

    return (
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    );
}