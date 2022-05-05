import { IconButton } from "@chakra-ui/react";
import React from "react";

export const AddButton = ({ icon }) => {
  return (
    <IconButton
      size="lg"
      w="1em"
      borderRadius="50%"
      bg="black"
      color="white"
      position="absolute"
      bottom="2em"
      right="2em"
      icon={icon}
    />
  );
};
