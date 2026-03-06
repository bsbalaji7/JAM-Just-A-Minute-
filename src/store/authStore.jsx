import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("jam_user")) || null
  );

  /* ================= LOGIN ================= */

  const login = async (email, password) => {

    try {

      const response = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return false;
      }

      /* save token */

      localStorage.setItem("jam_token", data.token);

      /* save user */

      localStorage.setItem("jam_user", JSON.stringify(data.user));

      setUser(data.user);

      return true;

    } catch(error){

      console.error(error);
      alert("Server error");

      return false;

    }

  };

  /* ================= REGISTER ================= */

  const register = async (formData) => {

    try {

      const response = await fetch("http://localhost:5000/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return false;
      }

      return true;

    } catch(error){

      console.error(error);
      alert("Server error");

      return false;

    }

  };

  /* ================= LOGOUT ================= */

  const logout = () => {

    localStorage.removeItem("jam_token");
    localStorage.removeItem("jam_user");

    setUser(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};

export const useAuth = () => useContext(AuthContext);