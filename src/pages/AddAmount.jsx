import {
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { InputAdd } from "../components/InputAdd";
import { AddButton } from "../components/Button";
import { MdOutlineCheckCircle } from "react-icons/md";
import { useExpenseContext } from "../context/ExpenseContext";

export const AddAmount = () => {
  const { items, setItems } = useExpenseContext();
  const [itemData, setItemData] = useState({
    amount: null,
    category: null,
    description: "",
  });

  const addItem = () => {
    const copyTest = [...items];

    copyTest.push(itemData);

    setItems(copyTest);
  };

  return (
    <Stack spacing={10}>
      <HStack my="1em">
        <Link to="/">
          <IconButton icon={<MdKeyboardArrowLeft />} fontSize="1.5em" />
        </Link>
        <Text fontWeight="bold">Add Amount</Text>
      </HStack>
      <FormControl>
        <HStack justifyContent="center">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.600"
              fontSize="2em"
              children="$"
            />
            <Input
              fontSize="2.8em"
              onChange={({ target }) =>
                setItemData({ ...itemData, amount: Number(target.value) })
              }
            />
            <InputRightElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="USD"
            />
          </InputGroup>
        </HStack>
        <Select
          placeholder="Expense made for"
          onChange={({ target }) =>
            setItemData({ ...itemData, category: target.value })
          }
        >
          <option>Coffee</option>
          <option>Coffee2</option>
        </Select>
        <FormLabel>Description</FormLabel>
        <Input
          onChange={({ target }) =>
            setItemData({ ...itemData, description: target.value })
          }
        />
      </FormControl>
      <AddButton icon={<MdOutlineCheckCircle />} addItem={addItem} />
    </Stack>
  );
};
