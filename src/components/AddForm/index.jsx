import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ExpenseIcon } from "../ExpenseIcon";
import { CATEGORIES } from "../Categories";

export const AddForm = ({ setItemData, itemData }) => {
  const [selectCategory, setSelectCategory] = useState("Select");

  const handleSelect = (category) => {
    setSelectCategory(category.name);
    setItemData({
      ...itemData,
      category: category.name,
    });
  };
  return (
    <FormControl>
      <Stack justifyContent="center" spacing={5}>
        <NumberInput precision={2} step={0.2}>
          <FormLabel>Amount</FormLabel>
          <NumberInputField
            // fontSize="2em"
            value={itemData.amount}
            onChange={({ target }) =>
              setItemData({ ...itemData, amount: Number(target.value) })
            }
          />
        </NumberInput>
      </Stack>
      <Stack my={5}>
        <FormLabel>Expense category</FormLabel>
        <Menu>
          <MenuButton as={Button} variant="outline">
            <HStack justifyContent="space-between">
              <Text>{selectCategory}</Text>
              <Icon as={MdKeyboardArrowDown} />
            </HStack>
          </MenuButton>
          <MenuList maxH="20em" overflowY="scroll">
            {CATEGORIES.map((category) => (
              <MenuItem
                key={category.name}
                onClick={() => handleSelect(category)}
              >
                <ExpenseIcon icon={category.icon} />
                <Text ml=".6em">{category.name}</Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>
      <Stack my={0}>
        <FormLabel>Description</FormLabel>
        <Input
          value={itemData.description}
          onChange={({ target }) =>
            setItemData({ ...itemData, description: target.value })
          }
        />
      </Stack>
    </FormControl>
  );
};
