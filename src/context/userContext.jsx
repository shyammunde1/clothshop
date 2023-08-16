import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedLIstener,
} from "../utils/firebase/firebase.utils";

const initialUser = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const userContext = createContext(initialUser);
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedLIstener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
