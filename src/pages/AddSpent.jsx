import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddButton } from "../components/Button";
import { MdOutlineCheckCircle, MdKeyboardArrowLeft } from "react-icons/md";
import { AddForm } from "../components/AddForm";
import {
  arrayUnion,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useExpenseContext } from "../context/ExpenseContext";
import { v4 as uuidv4 } from "uuid";
import { OwnAlert } from "../components/Alert";

export const AddSpent = () => {
  const { currentUser, items } = useExpenseContext();
  const [alert, setAlert] = useState(false);
  const [itemData, setItemData] = useState({
    id: uuidv4(),
    amount: "",
    category: undefined,
    description: "",
  });

  //create change route
  let navigate = useNavigate();

  const addItem = () => {
    //add user to expense
    const expenseUser = {
      user: currentUser.email,
      expenses: [itemData],
    };

    // add to firebase
    const db = getFirestore();
    const userRef = doc(db, "usersExpenses", `${currentUser.uid}`);

    if (items) {
      updateDoc(userRef, {
        expenses: arrayUnion(itemData),
      });
    } else {
      setDoc(userRef, expenseUser);
    }

    setAlert(true);
    setItemData({
      amount: "",
      category: "",
      description: "",
      icon: "",
    });

    // after two seconds back to home
    setTimeout(() => {
      navigate("/");
      setAlert(false);
    }, 2000);
  };

  return (
    <Stack spacing={20} height="100%" position="relative">
      <HStack my="1em">
        <Link to="/">
          <IconButton icon={<MdKeyboardArrowLeft />} fontSize="1.5em" />
        </Link>
        <Text fontWeight="bold">Add Amount</Text>
      </HStack>
      <AddForm itemData={itemData} setItemData={setItemData} />
      <Stack position="absolute" bottom="10" right="0">
        <AddButton icon={<MdOutlineCheckCircle />} addItem={addItem} />
      </Stack>
      {alert && <OwnAlert message={"You've created an spent"} />}
    </Stack>
  );
};
