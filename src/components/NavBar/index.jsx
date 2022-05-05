import { Avatar, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";

export const NavBar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" my="2em">
      <Stack direction="row" alignItems="center">
        <Icon as={MdMenu} />
        <Text>Dashboard</Text>
      </Stack>
      <Avatar size="xs" />
    </Stack>
  );
};
