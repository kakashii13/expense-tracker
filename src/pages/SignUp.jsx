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

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth(email, password);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signup(email, password);
      navigate("/");
    } catch {
      setLoading(false);
      setError("Failed to create an account");
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  const border = useColorModeValue("#ddd", "#2D3748");

  return (
    <VStack justifyContent="center" h="100%" spacing={10}>
      <Stack
        spacing={4}
        p="2em"
        border={`1px solid ${border}`}
        borderRadius="0.5em"
      >
        <Heading textAlign="center">Sign up</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Failed to sign up</AlertTitle>
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <HStack justifyContent="space-between">
              <FormLabel htmlFor="password" mt="10px">
                Password
              </FormLabel>
            </HStack>
            <Input
              pr="4.5rem"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button
              isLoading={loading ? true : false}
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
        border={`1px solid ${border}`}
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
