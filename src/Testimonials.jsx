import {
  Box,
  Heading,
  Text,
  Avatar,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import EricBarone from "./assets/ericbarone.jpeg";
import TobyFox from "./assets/tobyfox.jpg";
import TeamCherry from "./assets/teamcherry.jpeg";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const Testimonials = () => {
  const bgColor = useColorModeValue("teal.50", "gray.800");
  const textMain = useColorModeValue("teal.800", "teal.100");

  const cardBg = useColorModeValue("white", "gray.700");
  const nameColor = useColorModeValue("teal.700", "teal.200");
  const roleColor = useColorModeValue("teal.500", "teal.300");
  const quoteColor = useColorModeValue("gray.700", "gray.100");
  const borderColor = useColorModeValue("teal.100", "teal.600");

  return (
    <Box bg={bgColor} py="5rem" px="4rem">
      <Heading textAlign="center" mb="7rem" fontSize="5xl" color={textMain}>
        Success Stories From Our Community
      </Heading>

      <SimpleGrid columns={3} spacing="4rem">
        {/* Eric Barone */}
        <MotionBox
          bg={cardBg}
          borderRadius="2xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          p="2rem"
          border="2px solid"
          borderColor={borderColor}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            boxShadow: "0px 12px 30px rgba(0, 128, 128, 0.4)",
            borderColor: "rgb(56, 178, 172)",
          }}
        >
          <VStack spacing={4} align="center" textAlign="center">
            <Avatar name="Eric Barone" src={EricBarone} size="xl" />
            <Text fontWeight="bold" fontSize="lg" color={nameColor}>
              Eric Barone
            </Text>
            <Text fontSize="sm" color={roleColor}>
              Creator: Stardew Valley
            </Text>
            <Text fontSize="sm" fontStyle="italic" color={quoteColor} lineHeight="1.6">
              “The self-paced learning on this site gave me the freedom to go deep — from mastering game loops to designing tile maps. It gave me the confidence and clarity to build my own game engine from scratch.”
            </Text>
          </VStack>
        </MotionBox>

        {/* Team Cherry */}
        <MotionBox
          bg={cardBg}
          borderRadius="2xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          p="2rem"
          border="2px solid"
          borderColor={borderColor}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            boxShadow: "0px 12px 30px rgba(0, 128, 128, 0.4)",
            borderColor: "rgb(56, 178, 172)",
          }}
        >
          <VStack spacing={4} align="center" textAlign="center">
            <Avatar name="Team Cherry" src={TeamCherry} size="xl" />
            <Text fontWeight="bold" fontSize="lg" color={nameColor}>
              Team Cherry
            </Text>
            <Text fontSize="sm" color={roleColor}>
              Creators: Hollow Knight
            </Text>
            <Text fontSize="sm" fontStyle="italic" color={quoteColor} lineHeight="1.6">
              “We met during an online game jam hosted through this platform. The resources, tools, and community support gave us the perfect launchpad — that jam prototype evolved into Hollow Knight.”
            </Text>
          </VStack>
        </MotionBox>

        {/* Toby Fox */}
        <MotionBox
          bg={cardBg}
          borderRadius="2xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          p="2rem"
          border="2px solid"
          borderColor={borderColor}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            boxShadow: "0px 12px 30px rgba(0, 128, 128, 0.4)",
            borderColor: "rgb(56, 178, 172)",
          }}
        >
          <VStack spacing={4} align="center" textAlign="center">
            <Avatar name="Toby Fox" src={TobyFox} size="xl" />
            <Text fontWeight="bold" fontSize="lg" color={nameColor}>
              Toby Fox
            </Text>
            <Text fontSize="sm" color={roleColor}>
              Creator: Undertale
            </Text>
            <Text fontSize="sm" fontStyle="italic" color={quoteColor} lineHeight="1.6">
              “What stood out was the community — sharing early builds here helped me shape the emotional tone of Undertale. The storytelling guides and feedback loops pushed me to create something truly personal.”
            </Text>
          </VStack>
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
