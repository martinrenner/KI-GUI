import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import TokenContext from "./TokenContext";

const TokenContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken("");
  };

  const isTokenValid = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      if (decodedToken && decodedToken.exp) {
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
      }
    } catch (error) {
      logout();
    }
    return false;
  };

  return (
    <TokenContext.Provider value={{ token, login, logout, isTokenValid }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
