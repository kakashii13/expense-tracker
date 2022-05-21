import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuth = (email, password) => {
  const signup = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPass = () => {
    return sendPasswordResetEmail(auth, email);
  };

  return { signup, login, logout, resetPass };
};
