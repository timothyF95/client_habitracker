// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Flex, HStack, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

function Navbar({ onLogout }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.600", "white");

  const handleLogout = () => {
    onLogout();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <Box bg={bg} px={4} py={2} shadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Link style={{ color }} to="/">Home</Link>
          <Link style={{ color }} to="/habit">Habit</Link>
          <Link style={{ color }} to="/todo">To-Do</Link>
          <Link style={{ color }} to="/pulse">Pulse</Link>
          <Link style={{ color }} to="/timer">Timer</Link>
          <Link style={{ color }} to="/profile">Profile</Link>
        </HStack>

        <HStack spacing={4}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
