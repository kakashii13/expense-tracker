import { Icon } from "@chakra-ui/react";
import React from "react";

export const ExpenseIcon = ({ icon }) => {
  return (
    <Icon
      color="white"
      as={icon}
      bg="purple.500"
      borderRadius=".4em"
      p=".2em"
      fontSize="2.5em"
    />
  );
};
