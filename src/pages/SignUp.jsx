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
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth(email, password);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/");
    } catch {
      setError("Failed to create an account");
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  return (
    <VStack justifyContent="center" h="100%" spacing={10}>
      <Stack
        spacing={4}
        bg="gray.50"
        p="2em"
        border="1px solid #ddd"
        borderRadius="0.5em"
      >
        <Heading textAlign="center">Sign Up</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Failed to create an account</AlertTitle>
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
            <FormLabel htmlFor="password">Password</FormLabel>
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
              Sign up
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
          <Text mx="0">Already have an account?</Text>
          <Link to="/login">
            <Text color="blue.500">Login</Text>
          </Link>
        </HStack>
      </HStack>
    </VStack>
  );
};
