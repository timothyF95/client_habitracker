// src/components/Profile.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function ProfilePage() {
  return (
    <Box p={4}>
      <Heading>Your Profile</Heading>
      <Text mt={4}>View and edit your profile information here!</Text>
    </Box>
  );
}

export default ProfilePage;
