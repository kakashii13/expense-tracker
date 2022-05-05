import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export const AddButton = () => {
  return (
    <>
      <Link to=":detail">
        <Button
          size="lg"
          w="1em"
          borderRadius="50%"
          bg="black"
          color="white"
          position="absolute"
          bottom="2em"
          right="2em"
        >
          <Icon as={MdAdd} />
        </Button>
      </Link>
    </>
  );
};
