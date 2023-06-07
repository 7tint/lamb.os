import React, { ReactElement } from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

const About = (): ReactElement => {
  return (
    <Box height="450px" width="700px" px={6} pt={12} overflowY="scroll">
      <Heading as="h1" size="xl">
        Lambert Liu
      </Heading>
      <Box my={8}>
        <Heading as="h3" size="md" mb={2}>
          Lorem ipsum
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, nunc id aliquam ultricies, nunc nisl ultricies nunc,
          vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl eget aliquet
          ullamcorper, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae
          nisl.
        </Text>
      </Box>
      <Box my={8}>
        <Heading as="h2" size="lg" mb={2}>
          Section
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, nunc id aliquam ultricies, nunc nisl ultricies nunc,
          vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl eget aliquet
          ullamcorper, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae
          nisl.
        </Text>
      </Box>
      <Box my={8}>
        <Heading as="h2" size="lg" mb={2}>
          Section
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, nunc id aliquam ultricies, nunc nisl ultricies nunc,
          vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl eget aliquet
          ullamcorper, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae
          nisl.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
