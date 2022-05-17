import { IconButton } from "@chakra-ui/react";
import React from "react";

export const AddButton = ({ icon, addItem }) => {
  return (
    <IconButton
      fontSize="1.5em"
      size="lg"
      w="1em"
      borderRadius="50%"
      bg="blue.800"
      color="white"
      icon={icon}
      onClick={addItem}
      _hover={{}}
    />
  );
};
