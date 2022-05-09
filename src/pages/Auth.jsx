import {
  Button,
  FormLabel,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });

  return (
    <VStack justifyContent="center" h="100%" spacing={10}>
      <Stack
        spacing={3}
        bg="gray.50"
        p="2em"
        border="1px solid #ddd"
        borderRadius="0.5em"
      >
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          bg="white"
          onChange={({ target }) => setEmail(target.value)}
        />
        <FormLabel htmlFor="password">Password address</FormLabel>
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
          Sign in
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
