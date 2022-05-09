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
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const AddSpent = () => {
  const [alert, setAlert] = useState(false);
  const [itemData, setItemData] = useState({
    amount: "",
    category: undefined,
    description: "",
    icon: "",
  });

  //create change route
  let navigate = useNavigate();

  const addItem = () => {
    // add to firebase

    const db = getFirestore();
    const queryCollection = collection(db, "expenses");

    addDoc(queryCollection, itemData);

    // setItems(copyTest);
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
        <Link to="/user">
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
