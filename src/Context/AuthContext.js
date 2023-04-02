import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db, auth } from "../util/initFirebase";
import { set, ref } from "firebase/database";

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [userid, setUserid] = useState("");

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    console.log("entered");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      const { email, uid } = currentUser;
      setUserid(uid);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, userid }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
