import { Avatar, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" my="2em">
      <HStack alignItems="center">
        <Icon as={MdMenu} />
        <Text>Dashboard</Text>
      </HStack>
      <Avatar size="xs" />
    </HStack>
  );
};
