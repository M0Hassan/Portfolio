import React from "react";
import { Img, Heading, VStack } from "@chakra-ui/react";
import FullScreenPrac from "./FullScreenPrac";

const greeting = "Hello, I am Mohamed Hassan!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenPrac
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={12}>
      <VStack>
        <Img alt="Me" src={require("../images/Me.jpg")} borderRadius='full' boxSize='150px'/> 
        <p>{greeting}</p>
      </VStack>
      <VStack spacing={4}>
        <Heading as="h1" size="4xl">{bio1}</Heading>
        <Heading as="h1" size="4xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenPrac>
);

export default LandingSection;
