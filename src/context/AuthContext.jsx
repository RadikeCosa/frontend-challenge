// src/context/AuthContext.js
import { createContext, useState, useContext } from "react";

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
