import React, { createContext, useContext, useState, ReactNode } from "react";
import { signupAPI, loginAPI } from "../services/authService";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  const signup = async (data: any) => {
    try {
      const res = await signupAPI(data);
      // Backend response structure ke mutabiq check:
      const token = res.data?.token || res.token;
      const userData = res.data?.user || res.user || res.data;

      if (token) {
        localStorage.setItem("token", token);
        setUser(userData);
      }
      return res;
    } catch (err: any) {
      throw new Error(err.message || "Signup failed");
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await loginAPI(email, password);
      // Backend response structure ke mutabiq check:
      const token = res.data?.token || res.token;
      const userData = res.data?.user || res.user || res.data;

      if (token) {
        localStorage.setItem("token", token);
        setUser(userData);
      }
      return res;
    } catch (err: any) {
      throw new Error(err.message || "Login failed");
    }
  };

  return (
    <AuthContext.Provider value={{ signup, login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);