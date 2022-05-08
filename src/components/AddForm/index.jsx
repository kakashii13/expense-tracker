import React from "react";
import {
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
} from "@chakra-ui/react";
import {
  MdShoppingCart,
  MdOutlineCreditCard,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { ExpenseIcon } from "../ExpenseIcon";

const CATEGORIES = [
  { name: "Market", icon: MdShoppingCart },
  { name: "Card", icon: MdOutlineCreditCard },
  { name: "Health", icon: MdOutlineHealthAndSafety },
];

export const AddForm = ({ setItemData, itemData }) => {
  return (
    <FormControl>
      <HStack justifyContent="center" spacing={5}>
        <InputLeftElement
          pointerEvents="none"
          color="gray.600"
          fontSize="1.5em"
          children="$"
        />
        <NumberInput variant="flushed" precision={2} step={0.2}>
          <NumberInputField
            fontSize="2em"
            value={itemData.amount}
            onChange={({ target }) =>
              setItemData({ ...itemData, amount: Number(target.value) })
            }
          />
        </NumberInput>
        <InputRightElement
          pointerEvents="none"
          color="gray.300s"
          fontSize=".5em"
          children="USD"
        />
      </HStack>
      <Stack my={5}>
        <Select
          placeholder="Expense made for"
          variant="flushed"
          onChange={(e) =>
            setItemData({
              ...itemData,
              category: e.target.value,
            })
          }
        >
          {CATEGORIES.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </Select>
      </Stack>
      <Stack my={0}>
        <Input
          placeholder="Description"
          variant="flushed"
          value={itemData.description}
          onChange={({ target }) =>
            setItemData({ ...itemData, description: target.value })
          }
        />
      </Stack>
    </FormControl>
  );
};
