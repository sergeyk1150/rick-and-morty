import { useState } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(()=>localStorage.getItem('user') || null)

  const singin = (newUser, callback) => {
    localStorage.setItem('user', newUser)
    setUser(newUser),
    callback()
  }
  const singout = (callback) => {
    localStorage.removeItem('user')
    setUser(null)
    callback()
  }
  const value = {
    user,
    singin,
    singout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
