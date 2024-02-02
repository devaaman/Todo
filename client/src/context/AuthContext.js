/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../components/config";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  

  // useEffect(() => {
  //   getUser();
  // }, []);

  // const getUser = async () => {
  //   try {
  //     const res = await axios.get(URL + "/refetch", { withCredentials: true });
  //     console.log("user data ",res)
  //     setUser(res.data);
  //     console.log(res.data)
  //   } catch (error) {
  //     // Handle the error more gracefully
  //     console.error("Error fetching user data:", error);

  //     // If the error is due to authentication (e.g., user not logged in), you may want to set user to null
  //     setUser(null);
  //   }
  // };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
