import {
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useExpenseContext } from "../../context/ExpenseContext";
import { ExpenseIcon } from "../ExpenseIcon";
import { MdDelete } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { CATEGORIES } from "../Categories";
import { OwnAlert } from "../Alert";

export const ExpensesList = () => {
  const [alert, setAlert] = useState(false);
  const { items, currentUser } = useExpenseContext();

  const onDelete = async (id) => {
    const newItems = [...items.expenses];

    const itemIndex = newItems?.findIndex((item) => item.id === id);

    newItems?.splice(itemIndex, 1);

    const db = getFirestore();
    const userRef = doc(db, "usersExpenses", `${currentUser.uid}`);

    await updateDoc(userRef, {
      expenses: newItems,
    });
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const bg = useColorModeValue("gray.100", "whiteAlpha.50");
  const color = useColorModeValue("blackAlpha.700", "whiteAlpha.700");
  return (
    <Stack
      w="100%"
      h="300px"
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {items?.expenses.length !== 0 ? (
        items.expenses?.map((item) => (
          <HStack
            key={item.id}
            justifyContent="space-between"
            bg={bg}
            p=".8em"
            borderRadius="1.5em"
          >
            <HStack spacing={5}>
              <ExpenseIcon
                icon={
                  CATEGORIES.filter((x) => x.name === item.category)[0].icon
                }
              />
              <Flex direction="column">
                <Text fontWeight="bold">{item.category}</Text>
                <Text fontSize="xs" color={color}>
                  {item.description}
                </Text>
              </Flex>
            </HStack>
            <HStack>
              <Text fontWeight="bold">{`$ ${item.amount}`}</Text>
              <Icon
                as={MdDelete}
                cursor="pointer"
                onClick={() => onDelete(item.id)}
              />
            </HStack>
          </HStack>
        ))
      ) : (
        <VStack justifyContent="center" alignItems="center" color="gray.400">
          <Icon as={IoWalletOutline} height="5em" width="5em" />
          <Text>You don't have expenses</Text>
        </VStack>
      )}
      {alert && <OwnAlert message={"You've deleted an expense"} />}
    </Stack>
  );
};
