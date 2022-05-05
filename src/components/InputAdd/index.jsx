import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useExpenseContext } from "../../context/ExpenseContext";

export const InputAdd = () => {
  const { setAmount } = useExpenseContext();
  return (
    <HStack justifyContent="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.600"
          fontSize="2em"
          children="$"
        />
        <Input fontSize="2.8em" />
        <InputRightElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="USD"
        />
      </InputGroup>
    </HStack>
  );
};
