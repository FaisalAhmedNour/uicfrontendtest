import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [headerSet, setHeaderSet] = useState({})
    const [paymentInfo, setPaymentInfo] = useState([]);

    const setCookie = (name, value, days) => {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/;`;
    }

    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }

    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
        headerSet,
        setHeaderSet,
        paymentInfo,
        setPaymentInfo,
        setCookie,
        getCookie
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;