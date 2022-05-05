import { Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineGift } from "react-icons/ai";

export const ExpensesList = () => {
  return (
    <Stack w="100%">
      <HStack
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
            <Text fontWeight="bold">Coffee</Text>
            <Text fontSize="xs" color="blackAlpha.700">
              with flor
            </Text>
          </Flex>
        </HStack>
        <Stack>
          <Text fontWeight="bold">$50</Text>
        </Stack>
      </HStack>
    </Stack>
  );
};
