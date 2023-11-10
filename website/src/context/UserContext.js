import { createContext, useContext } from "react";

export const userContext = createContext() 

export const UserContextProvider =userContext.Provider

export default function useUser(){
  return useContext(userContext);
}