import { Text, Heading, Box, SimpleGrid, VStack, Button } from "@chakra-ui/react";

const PricingTab = () => {
  return (
    <Box mt="5rem" h="auto" px="5rem" pb="10rem">
      <Heading textAlign="center" fontSize="4xl" color="teal.800">
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
          bg="white"
          p="2rem"
          transition="0.3s ease"
          _hover={{ transform: "translateY(-10px)", borderColor: "teal.300" }}
        >
          <VStack spacing={4} align="start">
            <Heading fontSize="2xl" color="teal.700">Free</Heading>
            <Text color="gray.600">Perfect for beginners just getting started.</Text>
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
          bg="white"
          p="2rem"
          transition="0.3s ease"
          _hover={{ transform: "translateY(-10px)", borderColor: "teal.300" }}
        >
          <VStack spacing={4} align="start">
            <Heading fontSize="2xl" color="teal.700">Pro</Heading>
            <Text color="gray.600">For serious learners who want guidance.</Text>
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
          bg="white"
          p="2rem"
          transition="0.3s ease"
          _hover={{ transform: "translateY(-10px)", borderColor: "teal.300" }}
        >
          <VStack spacing={4} align="start">
            <Heading fontSize="2xl" color="teal.700">Team</Heading>
            <Text color="gray.600">Best for studios or student groups.</Text>
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
