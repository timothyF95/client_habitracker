import React, { useEffect, useState } from "react";
import { Box, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

function StreakPage() {
  const [daysCount, setDaysCount] = useState(0);
  const bg = useColorModeValue("gray.100", "gray.800");
  const headingColor = useColorModeValue("orange.500", "orange.300");
  const textColor = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    const calculateDays = () => {
      const startDate = new Date("2024-03-02");
      const today = new Date();
      const diffTime = Math.abs(today - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysCount(diffDays);
    };

    calculateDays();

    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeoutId = setTimeout(() => {
      calculateDays();
    }, nextMidnight - now);

    return () => clearTimeout(timeoutId);
  }, []);

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
        <Heading as="h1" size="4xl" color={headingColor}>
          {daysCount}
        </Heading>
        <Text fontSize="4xl" color={textColor}>
          Days since last rest day!
        </Text>
      </VStack>
    </Box>
  );
}

export default StreakPage;
