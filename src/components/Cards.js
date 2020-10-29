import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/core";

function Cards() {
  const styles = {
    bg: "#FFFFFF",
    borderColor: "#B2BEB5",
    w: "250px",
    h: "150px",
    textAlign: "center",
    boxShadow:
      "inset -3px -3px 7px #ffffff73, inset 3px 3px 3px rgba(94, 104, 121, .288)",
  };
  return (
    <Box
      w="100vw"
      display="flex"
      justifyContent="flex-start"
      alignContent="center"
      mt={20}
      mb={20}
      px="5em"
    >
      <Flex justify="space-evenly" w="75%">
        <Box
          bg={styles.bg}
          borderColor={styles.borderColor}
          borderWidth={1}
          w={styles.w}
          h={styles.h}
          borderRadius={4}
          boxShadow={styles.boxShadow}
          p={8}
          cursor="pointer"
        >
          <Text mb={3} fontWeight={700}>
            Requests in progress
          </Text>
          <Heading>17</Heading>
        </Box>
        <Box
          bg={styles.bg}
          borderColor={styles.borderColor}
          borderWidth={1}
          w={styles.w}
          h={styles.h}
          borderRadius={4}
          boxShadow={styles.boxShadow}
          p={8}
          cursor="pointer"
        >
          <Text mb={3} fontWeight={700}>
            Lawyers available
          </Text>
          <Heading>15</Heading>
        </Box>
        <Box
          bg={styles.bg}
          borderColor={styles.borderColor}
          borderWidth={1}
          w={styles.w}
          h={styles.h}
          borderRadius={4}
          boxShadow={styles.boxShadow}
          p={8}
          cursor="pointer"
        >
          <Text mb={3} fontWeight={700}>
            New cases today
          </Text>
          <Heading>5</Heading>
        </Box>
      </Flex>
    </Box>
  );
}

export default Cards;
