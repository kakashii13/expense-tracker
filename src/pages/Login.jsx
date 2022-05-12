import {
  Button,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <VStack justifyContent="center" h="100%" spacing={10}>
      <Stack
        spacing={4}
        bg="gray.50"
        p="2em"
        border="1px solid #ddd"
        borderRadius="0.5em"
      >
        <Heading textAlign="center">Log in</Heading>
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
          bg="purple.500"
          color="white"
          _hover={{
            outline: "none",
          }}
          _active={{}}
          //   onClick={signIn}
        >
          Login
        </Button>
      </Stack>
      <HStack
        border="1px solid #ddd"
        borderRadius="0.5em"
        p="1em"
        w="23em"
        justifyContent="center"
      >
        <Link color="blue.600">Create a count</Link>
      </HStack>
    </VStack>
  );
};
