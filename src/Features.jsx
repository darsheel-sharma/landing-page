import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Build from "./assets/build.svg";
import Mentor from "./assets/mentor.svg";
import Team from "./assets/team.svg";
import Beyond from "./assets/beyond.svg";

const Features = () => {
  return (
    <Box bg="teal.50" py="3rem" px="8rem">
      <Heading
        textAlign="center"
        fontSize="3.5rem"
        color="teal.900"
        mb="5rem"
        fontWeight="extrabold"
      >
        What You'll Get
      </Heading>

      {/* Feature 1 */}
      <Flex align="center" gap="4rem" mb="6rem">
        <Box flex="1" display="flex" justifyContent="center">
          <Image src={Build} alt="Self-Paced Learning" h="20rem" />
        </Box>
        <Box flex="2">
          <Heading fontSize="2.5rem" color="teal.800" mb="1rem">
            Self-Paced Learning Experience
          </Heading>
          <Text fontSize="1.25rem" color="gray.700" lineHeight="2">
            Master game development with a self-paced, gamified platform that keeps learning fun and focused. 
            Follow our Master Pathway or explore freely. Build real projects, gain multiple skills, and level up through interactive challenges — all at your own pace.
          </Text>
        </Box>
      </Flex>

      {/* Feature 2 */}
      <Flex direction="row-reverse" align="center" gap="4rem" mb="6rem">
        <Box flex="1" display="flex" justifyContent="center">
          <Image src={Mentor} alt="Mentorship & Career Growth" h="20rem" />
        </Box>
        <Box flex="2">
          <Heading fontSize="2.5rem" color="teal.800" mb="1rem">
            Mentorship & Career Growth
          </Heading>
          <Text fontSize="1.25rem" color="gray.700" lineHeight="2">
            Get personalized guidance from industry experts with 1-on-1 mentorship and portfolio reviews. 
            Prepare for game industry roles with resume tips, interview support, and deep feedback on your game mechanics, design, and storytelling.
          </Text>
        </Box>
      </Flex>

      {/* Feature 3 */}
      <Flex align="center" gap="4rem" mb="6rem">
        <Box flex="1" display="flex" justifyContent="center">
          <Image src={Team} alt="Community & Collaboration" h="20rem" />
        </Box>
        <Box flex="2">
          <Heading fontSize="2.5rem" color="teal.800" mb="1rem">
            Community & Collaboration
          </Heading>
          <Text fontSize="1.25rem" color="gray.700" lineHeight="2">
            Join a vibrant network of developers, artists, and creators. Collaborate on group projects, exchange peer feedback, 
            and engage in game jams, challenges, and showcases that keep you motivated and inspired.
          </Text>
        </Box>
      </Flex>

      {/* Feature 4 */}
      <Flex direction="row-reverse" align="center" gap="4rem">
        <Box flex="1" display="flex" justifyContent="center">
          <Image src={Beyond} alt="Beyond Development" h="20rem" />
        </Box>
        <Box flex="2">
          <Heading fontSize="2.5rem" color="teal.800" mb="1rem">
            Beyond Development
          </Heading>
          <Text fontSize="1.25rem" color="gray.700" lineHeight="2">
            Go beyond coding and learn how to publish and monetize your games. 
            From launching on Steam or mobile stores to leveraging assets and analytics tools — we help you turn games into real-world opportunities.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Features;
