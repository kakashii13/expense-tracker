import {
  Alert,
  AlertIcon,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
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

export const AddSpent = () => {
  const { currentUser, items } = useExpenseContext();
  const [alert, setAlert] = useState(false);
  const [itemData, setItemData] = useState({
    id: uuidv4(),
    amount: "",
    category: undefined,
    description: "",
    icon: "",
  });

  //create change route
  let navigate = useNavigate();

  const addItem = () => {
    //add user to expense
    const expenseUser = {
      user: currentUser.email,
      expenses: [itemData],
    };

    console.log(items);

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
    <Stack spacing={10}>
      <HStack my="1em">
        <Link to="/">
          <IconButton icon={<MdKeyboardArrowLeft />} fontSize="1.5em" />
        </Link>
        <Text fontWeight="bold">Add Amount</Text>
      </HStack>
      <AddForm itemData={itemData} setItemData={setItemData} />
      {alert ? (
        <Alert
          status="success"
          borderRadius=".5em"
          bg="white"
          border="1px solid #ddd"
          boxShadow="md"
        >
          <AlertIcon />
          You've created a spent
        </Alert>
      ) : (
        ""
      )}
      <AddButton icon={<MdOutlineCheckCircle />} addItem={addItem} />
    </Stack>
  );
};
