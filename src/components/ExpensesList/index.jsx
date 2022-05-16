import {
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useExpenseContext } from "../../context/ExpenseContext";
import { ExpenseIcon } from "../ExpenseIcon";
import { MdDelete } from "react-icons/md";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

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
    <Stack w="100%">
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
              <ExpenseIcon icon={item.icon} />
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
        <Text>You don't have expenses</Text>
      )}
      {alert && (
        <Alert
          position="relative"
          top="-390"
          boxShadow="md"
          status="success"
          bg="white"
          border="1px solid #ddd"
          borderRadius=".5em"
        >
          <AlertIcon />
          <AlertTitle>You've deleted an expense</AlertTitle>
        </Alert>
      )}
    </Stack>
  );
};
