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
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { resetPass } = useAuth(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await resetPass();
      setSuccessMessage("Check your email for instruccions");
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage("");
      }, 1000);
    } catch {
      setError("Failed to reset password");
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  const border = useColorModeValue("#ddd", "#2D3748");

  return (
    <VStack justifyContent="center" h="100%" spacing={10}>
      <Stack
        w="100%"
        spacing={4}
        p="2em"
        border={`1px solid ${border}`}
        borderRadius="0.5em"
      >
        <Heading textAlign="center">Reset Password</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        {successMessage && (
          <Alert status="success">
            <AlertIcon />
            <AlertTitle>{successMessage}</AlertTitle>
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              placeholder="Example@example.com"
              id="email"
              type="email"
              // bg="white"
              onChange={({ target }) => setEmail(target.value)}
            />

            <VStack>
              <Button
                isLoading={loading ? true : false}
                width="100%"
                mt="1em"
                bg="blue.700"
                color="white"
                _hover={{
                  outline: "none",
                }}
                _active={{}}
                type="submit"
              >
                Reset Password
              </Button>
              <Link to="/login">
                <Text color="blue.500" mt="1em">
                  Login
                </Text>
              </Link>
            </VStack>
          </FormControl>
        </form>
      </Stack>
    </VStack>
  );
};
