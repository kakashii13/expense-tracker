import { Skeleton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ExpensesList } from "../ExpensesList";
import { useExpenseContext } from "../../context/ExpenseContext";

export const Expenses = () => {
  const { loading } = useExpenseContext();
  return (
    <Stack direction="column" spacing={5}>
      <Text mt="2em" fontWeight="bold">
        All Expenses
      </Text>
      {loading ? (
        <Stack>
          <Skeleton height="50px" borderRadius="1.2em" />
          <Skeleton height="50px" borderRadius="1.2em" />
          <Skeleton height="50px" borderRadius="1.2em" />
        </Stack>
      ) : (
        <ExpensesList />
      )}
    </Stack>
  );
};
