import React from "react";
import { Box, Container, Grid, GridItem, Heading, Text, Image, Button, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      {/* Header */}
      <Box as="header" py={4} borderBottomWidth={1}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" size="lg">
              Modern WordPress Theme
            </Heading>
            <Flex>
              <Icon as={FaSearch} mr={4} boxSize={5} />
              <Icon as={FaUser} mr={4} boxSize={5} />
              <Icon as={FaBars} boxSize={5} />
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
            <GridItem>
              <Heading as="h2" size="2xl" mb={4}>
                Welcome to Our Website
              </Heading>
              <Text fontSize="xl" mb={8}>
                Discover the power of a modern and user-friendly WordPress theme.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwaGVybyUyMGltYWdlfGVufDB8fHx8MTcxMTAzODczNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hero Image" borderRadius="md" />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg={useColorModeValue("white", "gray.800")}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Key Features
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwZGVzaWduJTIwaWNvbnxlbnwwfHx8fDE3MTEwMzg3MzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Responsive Design" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Responsive Design
              </Heading>
              <Text>Looks great on any device, from desktop to mobile.</Text>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1521369817787-9f428eb5d54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21pemFibGUlMjBsYXlvdXQlMjBpY29ufGVufDB8fHx8MTcxMTAzODczNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customizable Layout" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Customizable Layout
              </Heading>
              <Text>Easily customize the layout to fit your content.</Text>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyLWZyaWVuZGx5JTIwaW50ZXJmYWNlJTIwaWNvbnxlbnwwfHx8fDE3MTEwMzg3MzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="User-Friendly Interface" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                User-Friendly Interface
              </Heading>
              <Text>Intuitive navigation for a seamless user experience.</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Get Started?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Take your website to the next level with our modern WordPress theme.
          </Text>
          <Button colorScheme="blue" size="lg">
            Download Now
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" py={10} borderTopWidth={1}>
        <Container maxW="container.lg" textAlign="center">
          <Text>&copy; 2023 Modern WordPress Theme. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
