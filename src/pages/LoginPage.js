// src/components/LoginPage.js
import React, { useState } from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading, Stack, useColorModeValue } from "@chakra-ui/react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("thisisapassord123");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password); // Call the login handler
  };

  const formBg = useColorModeValue("white", "gray.700");
  const inputBg = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg={useColorModeValue("gray.50", "gray.900")}
      p={4}
    >
      <Box
        w="100%"
        maxW="md"
        p={8}
        bg={formBg}
        boxShadow="lg"
        borderRadius="lg"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center" color={textColor}>
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel color={textColor}>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                bg={inputBg}
                color={textColor}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel color={textColor}>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                bg={inputBg}
                color={textColor}
              />
            </FormControl>

            <Button colorScheme="teal" type="submit" width="full">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
