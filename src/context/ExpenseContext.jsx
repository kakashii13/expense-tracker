import { collection, getDocs, getFirestore } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";

const expenseContext = createContext();

export const useExpenseContext = () => useContext(expenseContext);

export const ContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const queryCollection = collection(db, "expenses");

    getDocs(queryCollection).then((resp) =>
      setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
    );
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <expenseContext.Provider
      value={{
        amount,
        setAmount,
        items,
        setItems,
        loading,
      }}
    >
      {children}
    </expenseContext.Provider>
  );
};
