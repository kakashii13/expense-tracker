import { Badge, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const CurrentExpense = () => {
  return (
    <Stack>
      <HStack
        bg="black"
        h="auto"
        borderRadius="3em"
        justifyContent="space-between"
        p="1.6em"
        fontWeight="bold"
        boxShadow="lg"
      >
        <Box color="white" fontSize="4em">
          <Badge bg="black" color="white" fontSize=".6em">
            $
          </Badge>
          500
        </Box>
        <Text color="gray.600">USD</Text>
      </HStack>
    </Stack>
  );
};
