import { Box, Heading, Text, Avatar, VStack, SimpleGrid } from "@chakra-ui/react";
import EricBarone from "./assets/ericbarone.jpeg";
import TobyFox from "./assets/tobyfox.jpg";
import TeamCherry from "./assets/teamcherry.jpeg";

const Testimonials = () => {
  return (
    <Box bg="teal.50" py="5rem" px="4rem">
      <Heading textAlign="center" mb="7rem" fontSize="5xl" color="teal.800">
        Success Stories From Our Community
      </Heading>

      <SimpleGrid columns={3} spacing="4rem">
        {/* Eric Barone */}
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          p="2rem"
          border="1px solid"
          borderColor="teal.100"
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-10px)", boxShadow: "0 12px 30px rgba(0, 128, 128, 0.2)", borderColor: "teal.300" }}
        >
          <VStack spacing={4} align="center" textAlign="center">
            <Avatar name="Eric Barone" src={EricBarone} size="xl" />
            <Text fontWeight="bold" fontSize="lg" color="teal.700">Eric Barone</Text>
            <Text fontSize="sm" color="teal.500">Creator: Stardew Valley</Text>
            <Text fontSize="sm" fontStyle="italic" color="gray.700" lineHeight="1.6">
              “The self-paced learning on this site gave me the freedom to go deep — from mastering game loops to designing tile maps. It gave me the confidence and clarity to build my own game engine from scratch.”
            </Text>
          </VStack>
        </Box>

        {/* Team Cherry */}
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          p="2rem"
          border="1px solid"
          borderColor="teal.100"
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-10px)", boxShadow: "0 12px 30px rgba(0, 128, 128, 0.2)", borderColor: "teal.300" }}
        >
          <VStack spacing={4} align="center" textAlign="center">
            <Avatar name="Team Cherry" src={TeamCherry} size="xl" />
            <Text fontWeight="bold" fontSize="lg" color="teal.700">Team Cherry</Text>
            <Text fontSize="sm" color="teal.500">Creators: Hollow Knight</Text>
            <Text fontSize="sm" fontStyle="italic" color="gray.700" lineHeight="1.6">
              “We met during an online game jam hosted through this platform. The resources, tools, and community support gave us the perfect launchpad — that jam prototype evolved into Hollow Knight.”
            </Text>
          </VStack>
        </Box>

        {/* Toby Fox */}
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          p="2rem"
          border="1px solid"
          borderColor="teal.100"
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-10px)", boxShadow: "0 12px 30px rgba(0, 128, 128, 0.2)", borderColor: "teal.300" }}
        >
          <VStack spacing={4} align="center" textAlign="center">
            <Avatar name="Toby Fox" src={TobyFox} size="xl" />
            <Text fontWeight="bold" fontSize="lg" color="teal.700">Toby Fox</Text>
            <Text fontSize="sm" color="teal.500">Creator: Undertale</Text>
            <Text fontSize="sm" fontStyle="italic" color="gray.700" lineHeight="1.6">
              “What stood out was the community — sharing early builds here helped me shape the emotional tone of Undertale. The storytelling guides and feedback loops pushed me to create something truly personal.”
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
