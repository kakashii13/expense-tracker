import { Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { useExpenseContext } from "../../context/ExpenseContext";

export const ExpensesList = () => {
  const { items } = useExpenseContext();
  return (
    <Stack w="100%">
      {items?.map((item) => (
        <HStack
          key={item.description}
          justifyContent="space-between"
          bg="gray.100"
          p=".8em"
          borderRadius="1.5em"
        >
          <HStack spacing={5}>
            <Icon
              color="white"
              as={AiOutlineGift}
              bg="purple.500"
              borderRadius=".4em"
              p=".2em"
              fontSize="2.5em"
            />
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
      ))}
    </Stack>
  );
};
