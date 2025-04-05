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
        console.log("URL_BASE: " + process.env.BASE_URL)
        if(verified) return isAuth;
        setVerified(true);

        const response = await verifyAsync();

        if(response == false || response.status != 200) {
            setIsAuth(false);
            setUser({});
            setIsError(false);
            setErrorMessage("");
            setPermissionJson({});
            return false;
        };

        setIsAuth(true);
        setIsError(false);
        setErrorMessage("");
        setPermissionJson(response.data.payload.permissions);
        setUser(response.data.payload.user);
        return true;
    }

    const login = async (user, password) => {
        const response = await loginAsync(user, password);
        console.log(response)

        if(response == false || response.status != 200) {
            setIsAuth(false);
            setUser({});
            setIsError(true);
            setErrorMessage("");
            setPermissionJson({});
            return false;
        }

        setIsAuth(true);
        setIsError(false);
        setErrorMessage("");
        setPermissionJson(response.data.payload.permissions);
        setUser(response.data.payload.user);
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