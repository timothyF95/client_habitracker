import React from "react";
import { Box, Heading, Text, Button, Image, VStack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CogImage from "../assets/cog-svgrepo-com.svg";

function TodoPage() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const headingColor = useColorModeValue("orange.500", "orange.300");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg={bg} 
      textAlign="center"
      p={4}
    >
      <VStack spacing={6}>
        <Image
          src={CogImage} 
          alt="Page Under Construction"
          boxSize="200px"
        />
        <Heading as="h1" size="2xl" color={headingColor}>
          To-do Page Under Construction
        </Heading>
        <Text fontSize="lg" color={textColor}>
          We're working hard to bring this page to life! Please check back soon.
        </Text>
        <Button as={Link} to="/" colorScheme="orange" size="lg">
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
}

export default TodoPage;
