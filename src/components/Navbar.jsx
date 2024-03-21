import React, { useState } from "react";
import { Box, Container, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="nav" py={4} borderBottomWidth={1}>
      <Container maxW="container.lg">
        <Flex align="center" justify="space-between">
          <Box>Logo</Box>
          <Flex>
            <Icon as={FaSearch} mr={4} boxSize={5} />
            <Icon as={FaUser} mr={4} boxSize={5} />
            <Menu isOpen={isOpen}>
              <MenuButton as={Icon} icon={<FaBars />} boxSize={5} onClick={toggleMenu} />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
