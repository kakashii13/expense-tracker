import { Icon } from "@chakra-ui/react";
import React from "react";

export const ExpenseIcon = ({ icon }) => {
  return (
    <Icon
      color="blue.400"
      as={icon}
      bg="blue.100"
      borderRadius=".4em"
      p=".2em"
      fontSize="2.5em"
    />
  );
};
