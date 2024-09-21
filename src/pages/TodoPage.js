// src/components/Todo.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function TodoPage() {
  return (
    <Box p={4}>
      <Heading>To-Do List</Heading>
      <Text mt={4}>Manage your tasks here!</Text>
    </Box>
  );
}

export default TodoPage;
