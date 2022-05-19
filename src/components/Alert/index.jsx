import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import React from "react";

export const OwnAlert = ({ message }) => {
  return (
    <Alert
      position="absolute"
      top="5"
      boxShadow="md"
      status="success"
      bg="white"
      border="1px solid #ddd"
      borderRadius=".5em"
    >
      <AlertIcon />
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  );
};
