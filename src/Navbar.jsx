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
  Box,
  useColorMode,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGamepad, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionFlex = motion.create(Flex);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Use Chakra's utility to get values based on mode
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.7)", "rgba(26, 32, 44, 0.8)");
  const textColor = useColorModeValue("teal.800", "teal.100");
  const hoverColor = useColorModeValue("teal.600", "teal.300");
  const inputBg = useColorModeValue("white", "gray.700");

  return (
    <MotionFlex
      as="nav"
      py={4}
      px={5}
      align="center"
      justify="space-between"
      bg={bgColor}
      position="sticky"
      top={0}
      zIndex={999}
      boxShadow="sm"
      backdropFilter="blur(10px)"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
    >
      {/* Left: Logo + Explore */}
      <HStack spacing={8}>
        <Flex align="center" gap={2}>
          <Icon as={FaGamepad} boxSize={7} color="teal.500" />
          <Heading fontSize="xl" color={textColor}>
            DevAcademy
          </Heading>
        </Flex>

        <Text
          fontWeight="medium"
          fontSize="md"
          color={textColor}
          _hover={{ color: hoverColor, cursor: "pointer" }}
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
            bg={inputBg}
            fontSize="md"
            _placeholder={{ fontSize: "md" }}
            _focus={{
              borderColor: "teal.500",
              boxShadow: "0 0 0 3px rgba(13, 148, 136, 0.3)",
            }}
          />
        </InputGroup>
      </Box>

      {/* Right: Mentor + Auth Buttons + Dark mode toggle */}
      <HStack spacing={4}>
        <Text
          fontWeight="medium"
          fontSize="md"
          color={textColor}
          px={4}
          py={2}
          borderRadius="md"
          cursor="pointer"
          _hover={{
            bg: "teal.50",
            color: hoverColor,
            _dark: { bg: "teal.800", color: "teal.100" },
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
          _dark={{ color: "teal.100", borderColor: "teal.300", _hover: { bg: "teal.900" } }}
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

        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle dark mode"
          color={textColor}
          _hover={{ color: hoverColor }}
        />
      </HStack>
    </MotionFlex>
  );
};

export default Navbar;
