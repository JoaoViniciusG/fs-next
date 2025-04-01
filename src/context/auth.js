import {
    createContext,
    useState
} from 'react';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [permissionJson, setPermissionJson] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    const values = {
        permissionJson,
        isAuth
    };

    return (
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    );
}