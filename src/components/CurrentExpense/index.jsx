import {
  Badge,
  Box,
  Divider,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useExpenseContext } from "../../context/ExpenseContext";

export const CurrentExpense = () => {
  const { items } = useExpenseContext();

  const totalSpent = items.expenses
    ?.map((item) => item.amount)
    .reduce((el, acc) => Number(el) + Number(acc), []);

  return (
    <Stack direction="column">
      <VStack h="auto" justifyContent="space-between" p="1.6em">
        <Box fontSize="4em">
          <Badge bg="white" fontSize=".6em">
            $
          </Badge>
          {totalSpent?.length === 0 ? "0" : totalSpent}
        </Box>
      </VStack>
    </Stack>
  );
};
