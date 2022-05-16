import {
  Alert,
  AlertIcon,
  AlertTitle,
  Avatar,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useExpenseContext } from "../../context/ExpenseContext";
import { useAuth } from "../../hooks/useAuth";
import {
  MdLogout,
  MdLightMode,
  MdDarkMode,
  MdManageAccounts,
} from "react-icons/md";

export const NavBar = () => {
  const { logout } = useAuth();
  const { currentUser } = useExpenseContext();
  const [error, setError] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
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
          <Heading size="md">{`Hello ${currentUser.email}`}</Heading>
        </HStack>

        <Menu>
          <MenuButton>
            <Avatar size="sm" cursor="pointer" />
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem>
                <Icon as={MdManageAccounts} mr="0.5em" />
                My Account
              </MenuItem>
              <MenuItem onClick={toggleColorMode}>
                <Icon
                  as={colorMode === "light" ? MdDarkMode : MdLightMode}
                  mr="0.5em"
                />
                {colorMode === "light" ? "DarkMode" : "LightMode"}
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem onClick={handleLogout}>
              <Icon as={MdLogout} mr="0.5em" />
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Stack>
  );
};
