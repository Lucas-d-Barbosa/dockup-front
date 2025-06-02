import { createContext, useEffect, useState } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  typeUser: "admin" | "user" | "guest";
  createdAt: Date;
  updatedAt: Date;
}

const UserContext = createContext<User | null>(null);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      try {
        const userData = JSON.parse(userJson) as User;
        setUser(userData);
      } catch {
        setUser(null);
      }
    }
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
