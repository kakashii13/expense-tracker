import {
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { InputAdd } from "../components/InputAdd";
import { AddButton } from "../components/Button";
import { MdOutlineCheckCircle } from "react-icons/md";

export const AddAmount = () => {
  return (
    <Stack spacing={10}>
      <HStack my="1em">
        <Link to="/">
          <IconButton icon={<MdKeyboardArrowLeft />} fontSize="1.5em" />
        </Link>
        <Text fontWeight="bold">Add Amount</Text>
      </HStack>
      <InputAdd />
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input />
      </FormControl>
      <AddButton icon={<MdOutlineCheckCircle />} />
    </Stack>
  );
};
