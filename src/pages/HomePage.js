// src/components/HomePage.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box p={4}>
      <Heading>Home Page</Heading>
      <Text mt={4}>
        Welcome to the Home Page! Use the navigation bar to explore other sections.
      </Text>
    </Box>
  );
}

export default HomePage;
