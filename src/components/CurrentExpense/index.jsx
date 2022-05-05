import { Badge, Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useExpenseContext } from "../../context/ExpenseContext";

export const CurrentExpense = () => {
  const { amount } = useExpenseContext();
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
          {amount}
        </Box>
        <Text color="gray.600">USD</Text>
      </HStack>
    </Stack>
  );
};
