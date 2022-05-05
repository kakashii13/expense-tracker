import { Stack } from "@chakra-ui/react";
import React from "react";
import { AddButton } from "../components/Button";
import { CurrentExpense } from "../components/CurrentExpense";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <Stack>
      <NavBar />
      <CurrentExpense />
      <AddButton />
    </Stack>
  );
};
