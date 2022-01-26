import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import app from "../config/firebase";

const auth = app.auth()

export const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext).user;

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      setLoading(false);
      if (user && window.location.href === "http://localhost:3000/login")
        history("/");
    });
  }, [user, history]);

  const value = { user:user, setUser:setUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};


export default AuthProvider