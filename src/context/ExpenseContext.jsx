import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";

const expenseContext = createContext();

export const useExpenseContext = () => useContext(expenseContext);

const INITIAL_STATE = [
  { id: 1, category: "Health", amount: 300, description: "InitialState" },
];

export const ContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [items, setItems] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      // setLoading(false);
    });

    return unsubscriber;
  }, []);

  useEffect(() => {
    const getExpenses = async () => {
      const db = getFirestore();

      if (currentUser) {
        const docRef = doc(db, "usersExpenses", `${currentUser.uid}`);
        onSnapshot(docRef, (doc) => {
          setItems(doc.data());
        });
      }
    };
    getExpenses();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currentUser]);

  return (
    <expenseContext.Provider
      value={{
        amount,
        setAmount,
        items,
        setItems,
        loading,
        currentUser,
      }}
    >
      {children}
    </expenseContext.Provider>
  );
};
