import { Box, SimpleGrid, VStack, Text, Link, HStack, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="teal.900"
      color="teal.50"
      px="4rem"
      py="3rem"
      borderTop="4px solid"
      borderColor="teal.700"
      mt="5rem"
    >
      <SimpleGrid columns={4} spacing={10}>
        {/* About */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" fontSize="lg">About</Text>
          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Investors</Link>
        </VStack>

        {/* Resources */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" fontSize="lg">Resources</Text>
          <Link href="#">Documentation</Link>
          <Link href="#">Webinars</Link>
          <Link href="#">Courses</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Support</Link>
        </VStack>

        {/* Community */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" fontSize="lg">Community</Text>
          <Link href="#">Forums</Link>
          <Link href="#">Discord</Link>
          <Link href="#">Game Jams</Link>
          <Link href="#">Ambassadors</Link>
          <Link href="#">Events</Link>
        </VStack>

        {/* Legal */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" fontSize="lg">Legal</Text>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Code of Conduct</Link>
          <Link href="#">Security</Link>
        </VStack>
      </SimpleGrid>

      <Divider my="2rem" borderColor="teal.600" />

      <HStack justify="space-between" flexWrap="wrap">
        <Text fontSize="sm">© {new Date().getFullYear()} DevAcademy. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="#" fontSize="sm">Twitter</Link>
          <Link href="#" fontSize="sm">LinkedIn</Link>
          <Link href="#" fontSize="sm">GitHub</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
