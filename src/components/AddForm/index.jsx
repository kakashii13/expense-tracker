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
import {
  MdShoppingCart,
  MdOutlineCreditCard,
  MdOutlineHealthAndSafety,
  MdDirectionsCar,
  MdFlight,
  MdLightbulbOutline,
  MdOutlineShoppingBag,
  MdOutlineHome,
  MdOutlineMenuBook,
  MdOutlineAttachMoney,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { ExpenseIcon } from "../ExpenseIcon";

const CATEGORIES = [
  { name: "Market", icon: MdShoppingCart },
  { name: "Card", icon: MdOutlineCreditCard },
  { name: "Health", icon: MdOutlineHealthAndSafety },
  { name: "Car", icon: MdDirectionsCar },
  { name: "Holidays", icon: MdFlight },
  { name: "Light", icon: MdLightbulbOutline },
  { name: "Shopping", icon: MdOutlineShoppingBag },
  { name: "Rent", icon: MdOutlineHome },
  { name: "Education", icon: MdOutlineMenuBook },
  { name: "Taxes", icon: MdOutlineAttachMoney },
  { name: "Clothing", icon: GiClothes },
];

export const AddForm = ({ setItemData, itemData }) => {
  const [selectCategory, setSelectCategory] = useState("Select");

  const handleSelect = (category) => {
    setSelectCategory(category.name);
    setItemData({
      ...itemData,
      category: category.name,
      icon: category.icon.name,
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
          <MenuButton as={Button}>
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
