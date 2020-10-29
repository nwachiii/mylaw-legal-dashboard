import React from "react";
import {
  useToast,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
} from "@chakra-ui/core";

export const MenuDropdown = () => {
  const toast = useToast();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon="chevron-down" variant="outline">
        This Month
      </MenuButton>
      <MenuList>
        <MenuItem
          as="a"
          onClick={() =>
            toast({
              position: "bottom-left",
              title: "Cases Status",
              description: "There were no cases for this month.",
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Last Month
        </MenuItem>
        <MenuItem
          as="a"
          onClick={() =>
            toast({
              position: "bottom-left",
              title: "Cases Status",
              description: "All cases from this month has been closed",
              status: "success",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Two months back
        </MenuItem>
        <MenuItem
          as="a"
          onClick={() =>
            toast({
              position: "bottom-left",
              title: "Cases Status",
              description: "There were no cases for this month.",
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Three months back
        </MenuItem>
        <MenuItem
          as="a"
          onClick={() =>
            toast({
              position: "bottom-left",
              title: "Cases Status",
              description: "All cases from this month has been closed",
              status: "success",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Four months ago
        </MenuItem>
        <MenuItem
          as="a"
          onClick={() =>
            toast({
              position: "bottom-left",
              title: "Cases Status",
              description: "All cases from this month has been closed",
              status: "success",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Five months ago
        </MenuItem>
        <MenuItem
          as="a"
          onClick={() =>
            toast({
              position: "bottom-left",
              title: "Cases Status",
              description: "There were no cases for this month.",
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Six months back
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
