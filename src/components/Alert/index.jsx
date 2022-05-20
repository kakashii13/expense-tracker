import {
  Alert,
  AlertIcon,
  AlertTitle,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export const OwnAlert = ({ message }) => {
  const bg = useColorModeValue("white", "gray.900");
  const border = useColorModeValue("#ddd", "gray.50");

  return (
    <Alert
      position="absolute"
      top="5"
      boxShadow="sm"
      status="success"
      bg={bg}
      border={`1px solid ${border}`}
      borderRadius=".5em"
    >
      <AlertIcon />
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  );
};
