import React from "react";

interface TokenContextType {
    token: string;
    login: (newToken: string) => void,
    logout: () => void,
    isTokenValid: () => boolean,
}

const TokenContext = React.createContext({} as TokenContextType);

export default TokenContext;
