// src/components/HabitTracker.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function HabitPage() {
  return (
    <Box p={4}>
      <Heading>Habit Tracker</Heading>
      <Text mt={4}>Track your habits here!</Text>
    </Box>
  );
}

export default HabitPage;
