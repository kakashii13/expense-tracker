import { Badge, Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useExpenseContext } from "../../context/ExpenseContext";

export const CurrentExpense = () => {
  const { items } = useExpenseContext();

  const totalSpent = items.expenses
    ?.map((item) => item.amount)
    .reduce((el, acc) => Number(el) + Number(acc), []);

  return (
    <Stack direction="column">
      <HStack
        bg="black"
        h="auto"
        borderRadius="3em"
        justifyContent="space-between"
        p="1.6em"
        fontWeight="bold"
        boxShadow="lg"
      >
        <Box color="white" fontSize="4em">
          <Badge bg="black" color="white" fontSize=".6em">
            $
          </Badge>
          {totalSpent?.length === 0 ? "0" : totalSpent}
        </Box>
        <Text color="gray.600">USD</Text>
      </HStack>
    </Stack>
  );
};
