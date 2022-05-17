import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(email, password);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Failed to log in");
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <VStack justifyContent="center" h="100%" spacing={10}>
      <Stack
        spacing={4}
        bg={bg}
        p="2em"
        border="1px solid gray.500"
        borderRadius="0.5em"
      >
        <Heading textAlign="center">Log In</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Failed to login</AlertTitle>
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              bg="white"
              onChange={({ target }) => setEmail(target.value)}
            />
            <HStack justifyContent="space-between">
              <FormLabel htmlFor="password" mt="10px">
                Password
              </FormLabel>
              <Link to="/forgot-password">
                <Text color="blue.500">Forgot password?</Text>
              </Link>
            </HStack>
            <Input
              pr="4.5rem"
              bg="white"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button
              width="100%"
              mt="20px"
              bg="blue.700"
              color="white"
              _hover={{
                outline: "none",
              }}
              _active={{}}
              type="submit"
            >
              Login
            </Button>
          </FormControl>
        </form>
      </Stack>
      <HStack
        border="1px solid #ddd"
        borderRadius="0.5em"
        p="1em"
        w="100%"
        justifyContent="center"
      >
        <HStack>
          <Text mx="0">New?</Text>
          <Link to="/signup">
            <Text color="blue.500">Create an account</Text>
          </Link>
        </HStack>
      </HStack>
    </VStack>
  );
};
