import { IconButton } from "@chakra-ui/react";
import React from "react";

export const AddButton = ({ icon, addItem }) => {
  return (
    <IconButton
      fontSize="1.5em"
      size="lg"
      w="1em"
      borderRadius="50%"
      bg="purple.500"
      color="white"
      position="absolute"
      bottom="10"
      right="10"
      icon={icon}
      onClick={addItem}
      _hover={{}}
    />
  );
};
