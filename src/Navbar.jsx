import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Icon,
  Text,
  HStack,
  Box
} from "@chakra-ui/react";
import { FaGamepad, FaSearch, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      py={4}
      px={5}
      align="center"
      justify="space-between"
      bg="rgba(255, 255, 255, 0.7)"
      position="sticky"
      top={0}
      zIndex={999}
      boxShadow="sm"
      backdropFilter="blur(10px)"
    >
      {/* Left: Logo + Explore */}
      <HStack spacing={8}>
        <Flex align="center" gap={2}>
          <Icon as={FaGamepad} boxSize={7} color="teal.500" />
          <Heading fontSize="xl" color="teal.800">
            DevAcademy
          </Heading>
        </Flex>

        <Text
          fontWeight="medium"
          fontSize="md"
          color="teal.800"
          _hover={{ color: "teal.600", cursor: "pointer" }}
        >
          Explore
        </Text>
      </HStack>

      {/* Center: Search Bar */}
      <Box flex="1" mx={10}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search for anything"
            borderRadius="full"
            border="1px solid"
            borderColor="gray.300"
            bg="white"
            fontSize="md"
            _placeholder={{ fontSize: "md" }}
            _focus={{
              borderColor: "teal.500",
              boxShadow: "0 0 0 3px rgba(13, 148, 136, 0.3)" // teal.600 with alpha
            }}
          />
        </InputGroup>
      </Box>

      {/* Right: Mentor + Auth Buttons */}
      <HStack spacing={4}>
        <Text
          fontWeight="medium"
          fontSize="md"
          color="teal.800"
          px={4}
          py={2}
          borderRadius="md"
          cursor="pointer"
          _hover={{
            bg: "teal.50",
            color: "teal.600"
          }}
        >
          ✨ Become a Mentor
        </Text>

        <Button
          size="md"
          variant="outline"
          borderColor="teal.500"
          color="teal.600"
          fontWeight="medium"
          _hover={{ bg: "teal.50", borderColor: "teal.600" }}
        >
          Log in
        </Button>

        <Button
          size="md"
          bg="teal.500"
          color="white"
          fontWeight="medium"
          _hover={{ bg: "teal.600" }}
        >
          Sign up
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
