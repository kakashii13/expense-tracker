import React from "react";
import { Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddButton } from "../components/Button";
import { CurrentExpense } from "../components/CurrentExpense";
import { Expenses } from "../components/Expenses";
import { NavBar } from "../components/NavBar";
import { MdAdd } from "react-icons/md";

export const HomeUser = () => {
  return (
    <Stack height="100%" position="relative">
      <NavBar />
      <CurrentExpense />
      <Expenses />
      <Link to="/user/add">
        <Stack position="absolute" bottom="10" right="0">
          <AddButton icon={<MdAdd />} />
        </Stack>
      </Link>
    </Stack>
  );
};
