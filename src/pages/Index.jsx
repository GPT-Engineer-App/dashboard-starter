import { Box, Flex, VStack, Text, Link, Icon } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar = () => (
  <Box
    as="nav"
    position="fixed"
    left={0}
    top={0}
    w="200px"
    h="100vh"
    bg="gray.800"
    color="white"
    p={4}
  >
    <VStack spacing={4} align="stretch">
      <Link href="#" style={{ textDecoration: 'none' }}>
        <Flex align="center">
          <Icon as={FaHome} mr={2} />
          <Text>Home</Text>
        </Flex>
      </Link>
      <Link href="#" style={{ textDecoration: 'none' }}>
        <Flex align="center">
          <Icon as={FaUser} mr={2} />
          <Text>Profile</Text>
        </Flex>
      </Link>
      <Link href="#" style={{ textDecoration: 'none' }}>
        <Flex align="center">
          <Icon as={FaCog} mr={2} />
          <Text>Settings</Text>
        </Flex>
      </Link>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Box ml="200px" p={4} w="full">
        <Text fontSize="2xl">Welcome to the Dashboard</Text>
        <Text>This is your main content area.</Text>
      </Box>
    </Flex>
  );
};

export default Index;