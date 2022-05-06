import { createContext, useContext, useState } from "react";

const expenseContext = createContext();

export const useExpenseContext = () => useContext(expenseContext);

export const ContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [items, setItems] = useState([]);

  return (
    <expenseContext.Provider
      value={{
        amount,
        setAmount,
        items,
        setItems,
      }}
    >
      {children}
    </expenseContext.Provider>
  );
};
