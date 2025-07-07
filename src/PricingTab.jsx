import { Text, Heading, Box, SimpleGrid, VStack, Button, useColorModeValue } from "@chakra-ui/react";

const PricingTab = () => {

  const bgColor = useColorModeValue("teal.50", "gray.800");
  const textMain = useColorModeValue("teal.800", "teal.100");
  
  const cardBg = useColorModeValue("white", "gray.700");
  const nameColor = useColorModeValue("teal.700", "teal.200");
  const quoteColor = useColorModeValue("gray.600", "gray.100");

  return (
    <Box bg={bgColor} h="auto" px="5rem" pb="15rem" pt="5rem">
      <Heading textAlign="center" fontSize="4xl" color={textMain}>
        Ready to Build Something Great? Select a Plan to Begin
      </Heading>

      <SimpleGrid columns={3} spacing="5.5rem" mt="5rem">
        {/* Free Plan */}
        <Box
          h="30rem"
          border="2px solid"
          borderColor="teal.100"
          borderRadius="xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          bg={cardBg}
          p="2rem"
          transition="0.3s ease"
          _hover={{ transform: "translateY(-10px)", borderColor: "teal.300", boxShadow: "0px 12px 30px rgba(0, 128, 128, 0.4)" }}
        >
          <VStack spacing={4} align="start">
            <Heading fontSize="2xl" color={nameColor}>Free</Heading>
            <Text color={quoteColor}>Perfect for beginners just getting started.</Text>
            <VStack align="start" spacing={2} mt={2}>
              <Text>✔️ Game Jams Access</Text>
              <Text>✔️ Free Docs & Resources</Text>
              <Text>✔️ Basic Courses</Text>
              <Text>✔️ Monthly Free Webinars</Text>
            </VStack>
            <Text><b>Price:</b> Free of cost</Text>
            <Button mt="auto" colorScheme="teal" alignSelf="stretch">
              Start for Free
            </Button>
          </VStack>
        </Box>

        {/* Pro Plan */}
        <Box
          h="30rem"
          border="2px solid"
          borderColor="teal.100"
          borderRadius="xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          bg={cardBg}
          p="2rem"
          transition="0.3s ease"
          _hover={{ transform: "translateY(-10px)", borderColor: "teal.300", boxShadow: "0px 12px 30px rgba(0, 128, 128, 0.4)" }}
        >
          <VStack spacing={4} align="start">
            <Heading fontSize="2xl" color={nameColor}>Pro</Heading>
            <Text color={quoteColor}>For serious learners who want guidance.</Text>
            <VStack align="start" spacing={2} mt={2}>
              <Text>✔️ All Expert-Level Courses</Text>
              <Text>✔️ 1-on-1 Mentorship</Text>
              <Text>✔️ Personalized Roadmap</Text>
              <Text>✔️ Priority Support</Text>
              <Text>✔️ All Benifit of Free included</Text>
            </VStack>
            <Text><b>Price:</b> 20$ per Month</Text>
            <Button mt="auto" colorScheme="teal" alignSelf="stretch">
              Go Pro
            </Button>
          </VStack>
        </Box>

        {/* Team Plan */}
        <Box
          h="30rem"
          border="2px solid"
          borderColor="teal.100"
          borderRadius="xl"
          boxShadow="0 10px 25px rgba(0, 128, 128, 0.1)"
          bg={cardBg}
          p="2rem"
          transition="0.3s ease"
          _hover={{ transform: "translateY(-10px)", borderColor: "teal.300", boxShadow: "0px 12px 30px rgba(0, 128, 128, 0.4)" }}
        >
          <VStack spacing={4} align="start">
            <Heading fontSize="2xl" color={nameColor}>Team</Heading>
            <Text color={quoteColor}>Best for studios or student groups.</Text>
            <VStack align="start" spacing={2} mt={2}>
              <Text>✔️ Pro Access for All Team Members</Text>
              <Text>✔️ Dedicated Group Mentorship</Text>
              <Text>✔️ Shared Project Spaces</Text>
              <Text>✔️ Team Analytics</Text>
            </VStack>
            <Text><b>Price:</b> Contact the Sales Team</Text>
            <Button mt="auto" colorScheme="teal" alignSelf="stretch">
              Contact Sales
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default PricingTab;
