import {
  Alert,
  AlertIcon,
  AlertTitle,
  Avatar,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useExpenseContext } from "../../context/ExpenseContext";
import { useAuth } from "../../hooks/useAuth";

export const NavBar = () => {
  const { logout } = useAuth();
  const { currentUser } = useExpenseContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  };

  return (
    <Stack>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Failed to log out</AlertTitle>
        </Alert>
      )}
      <HStack justifyContent="space-between" my="2em">
        <HStack alignItems="center">
          {/* <Icon as={MdMenu} h="25px" w="25px" cursor="pointer" /> */}
          <Heading size="md">{`Hello ${currentUser.email}`}</Heading>
        </HStack>

        <Menu>
          <MenuButton>
            <Avatar size="sm" cursor="pointer" />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Stack>
  );
};
