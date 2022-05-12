import {
  Alert,
  AlertIcon,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddButton } from "../components/Button";
import { MdOutlineCheckCircle, MdKeyboardArrowLeft } from "react-icons/md";
import { AddForm } from "../components/AddForm";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { useExpenseContext } from "../context/ExpenseContext";
import { v4 } from "uuid";

export const AddSpent = () => {
  const { currentUser, items } = useExpenseContext();
  const [alert, setAlert] = useState(false);
  const [itemData, setItemData] = useState({
    id: "",
    amount: "",
    category: undefined,
    description: "",
    icon: "",
  });

  //create change route
  let navigate = useNavigate();

  console.log(items[0].expenses);

  const addItem = () => {
    //add user to expense
    const expenseUser = {
      user: currentUser.email,
      expenses: items[0].expenses.push({ ...itemData, id: v4() }),
    };

    // add to firebase
    const db = getFirestore();

    setDoc(doc(db, "usersExpenses", `${currentUser.uid}`), expenseUser);
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
