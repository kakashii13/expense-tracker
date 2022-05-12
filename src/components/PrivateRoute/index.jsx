import React from "react";
import { Navigate } from "react-router";
import { useExpenseContext } from "../../context/ExpenseContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useExpenseContext();

  return currentUser ? children : <Navigate to="/login" />;
};
