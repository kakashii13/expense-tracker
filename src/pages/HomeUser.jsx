import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { AddButton } from "../components/Button";
import { CurrentExpense } from "../components/CurrentExpense";
import { Expenses } from "../components/Expenses";
import { NavBar } from "../components/NavBar";
import { MdAdd } from "react-icons/md";

export const HomeUser = () => {
  return (
    <Stack>
      <NavBar />
      <CurrentExpense />
      <Expenses />
      <Link to="/user/add">
        <AddButton icon={<MdAdd />} />
      </Link>
    </Stack>
  );
};
