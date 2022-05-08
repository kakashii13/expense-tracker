import { Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useExpenseContext } from "../../context/ExpenseContext";
import { ExpenseIcon } from "../ExpenseIcon";

export const ExpensesList = () => {
  const { items } = useExpenseContext();
  return (
    <Stack w="100%">
      {items?.length !== 0 ? (
        items?.map((item) => (
          <HStack
            key={item.description}
            justifyContent="space-between"
            bg="gray.100"
            p=".8em"
            borderRadius="1.5em"
          >
            <HStack spacing={5}>
              <ExpenseIcon icon={item.icon} />
              <Flex direction="column">
                <Text fontWeight="bold">{item.category}</Text>
                <Text fontSize="xs" color="blackAlpha.700">
                  {item.description}
                </Text>
              </Flex>
            </HStack>
            <Stack>
              <Text fontWeight="bold">{`$ ${item.amount}`}</Text>
            </Stack>
          </HStack>
        ))
      ) : (
        <Text>You don't have expenses</Text>
      )}
    </Stack>
  );
};
