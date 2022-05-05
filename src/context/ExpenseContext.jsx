import { createContext, useContext, useState } from "react";

const expenseContext = createContext();

export const useExpenseContext = () => useContext(expenseContext);

export const ContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  return (
    <expenseContext.Provider
      value={{
        amount,
        setAmount,
      }}
    >
      {children}
    </expenseContext.Provider>
  );
};
