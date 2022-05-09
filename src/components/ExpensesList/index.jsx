import { Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useExpenseContext } from "../../context/ExpenseContext";
import { ExpenseIcon } from "../ExpenseIcon";
import { MdDelete } from "react-icons/md";
import { collection, getFirestore, setDoc } from "firebase/firestore";

export const ExpensesList = () => {
  const { items, setItems } = useExpenseContext();

  const onDelete = (id) => {
    const newItems = [...items];

    const itemIndex = newItems.findIndex((item) => item.id === id);

    console.log(itemIndex);

    newItems.splice(itemIndex, 1);

    // const db = getFirestore();
    // const queryCollection = collection(db, "expenses");

    // setDoc(queryCollection, newItems);
    console.log(newItems);
    setItems(newItems);
  };

  return (
    <Stack w="100%">
      {items?.length !== 0 ? (
        items?.map((item) => (
          <HStack
            key={item.description}
            justifyContent="space-between"
            bg="gray.100"
            p=".8em"
            borderRadius="1.5em"
          >
            <HStack spacing={5}>
              <ExpenseIcon icon={item.icon} />
              <Flex direction="column">
                <Text fontWeight="bold">{item.category}</Text>
                <Text fontSize="xs" color="blackAlpha.700">
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
    </Stack>
  );
};
