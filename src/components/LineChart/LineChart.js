import React from "react";
import { Line } from "react-chartjs-2";
import { Stack, Flex, Text, Box } from "@chakra-ui/core";
import { data } from "./data";
import { options } from "./options";
import { MenuDropdown } from "./MenuDropdown";

function LineChart() {
  return (
    <Box w="100vw" display="flex" justifyContent="flex-start" mt={8} px="9em">
      <Box w="75%">
        <MenuDropdown />

        <Line data={data} options={options} />

        <Stack isInline spacing={5} my={10} justify="center">
          <Flex>
            <Text fontWeight="bold">New cases</Text>
          </Flex>
          <Flex>
            <Text fontWeight="bold">Closed cases</Text>
          </Flex>
          <Flex>
            <Text fontWeight="bold">Active cases</Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}

export default LineChart;
