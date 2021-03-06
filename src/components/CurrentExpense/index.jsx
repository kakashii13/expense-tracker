import {
  Badge,
  Box,
  HStack,
  NumberInput,
  Stack,
  Stat,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useExpenseContext } from "../../context/ExpenseContext";

export const CurrentExpense = () => {
  const { items } = useExpenseContext();

  const totalSpent = items?.expenses
    ?.map((item) => item.amount)
    .reduce((el, acc) => Number(el) + Number(acc), []);

  return (
    <Stack direction="column">
      <VStack h="auto" justifyContent="space-between" p="1.6em">
        <HStack fontSize="4em">
          <Badge bg="inhret" fontSize=".5em">
            $
          </Badge>
          <Stat>
            {!items?.expenses || items?.expenses.length === 0
              ? "0"
              : totalSpent}
          </Stat>
        </HStack>
      </VStack>
    </Stack>
  );
};
