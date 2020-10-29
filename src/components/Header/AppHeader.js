import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/core";
import { HamburgerItems } from "./HamburgerItems";

function AppHeader() {
  return (
    <>
      <Box
        bg="#001540"
        w="100vw"
        color="white"
        display="flex"
        justifyContent="center"
      >
        <Flex w="80%" justifyContent="space-between">
          <Flex>
            <Image size="70px" src="../public/mylaw.png" alt="Logo-mylaw" />
            <Heading as="h5" ml={4} my="auto" size="md" color="#bbb">
              Lawyer Dashboard
            </Heading>
          </Flex>

          <HamburgerItems />
        </Flex>
      </Box>
    </>
  );
}

export default AppHeader;
