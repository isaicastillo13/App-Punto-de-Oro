import { useState } from "react";
import { loginRequest } from "../services/authService";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    setIsAuthenticated(true);

    try {
      const response = await loginRequest(email, password);
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsAuthenticated(false);
    }
  };

  return {  isAuthenticated, login };
};
