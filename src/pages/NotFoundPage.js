import React from "react";
import { Box, Heading, Text, Button, Image, VStack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/bomb-svgrepo-com.svg";

function NotFoundPage() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const headingColor = useColorModeValue("teal.500", "teal.300");
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
          src={NotFoundImage}
          alt="404 - Not Found"
          boxSize="300px"
        />
        <Heading as="h1" size="2xl" color={headingColor}>
          404 - Page Not Found
        </Heading>
        <Text fontSize="lg" color={textColor}>
          Oops! The page you are looking for does not exist.
        </Text>
        <Button as={Link} to="/" colorScheme="teal" size="lg">
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
}

export default NotFoundPage;
