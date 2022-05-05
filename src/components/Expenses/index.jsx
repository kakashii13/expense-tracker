import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ExpensesList } from "../ExpensesList";

export const Expenses = () => {
  return (
    <Stack direction="column" spacing={5}>
      <Text mt="2em" fontWeight="bold">
        All Expenses
      </Text>
      <Stack>
        <ExpensesList />
      </Stack>
    </Stack>
  );
};
