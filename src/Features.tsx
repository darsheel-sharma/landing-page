import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Build from "./assets/build.svg";
import Mentor from "./assets/mentor.svg";
import Team from "./assets/team.svg";
import Beyond from "./assets/beyond.svg";

const Features: React.FC = () => {

  const bgColor = useColorModeValue("teal.50", "gray.800");
  const textMain = useColorModeValue("teal.800", "teal.100");
  const textSub = useColorModeValue("teal.700", "teal.200");

  return (
    <Box bg={bgColor} py="3rem" px={{base: "3rem", md: "8rem"}}>
      <Heading
        textAlign="center"
        fontSize={{base: "2rem", md: "3.5rem"}}
        color={textMain}
        mb="5rem"
        fontWeight="extrabold"
      >
        What You'll Get
      </Heading>

      {/* Feature 1 */}
      <Flex align="center" gap="4rem" mb="6rem">
        <Box flex="1" justifyContent="center" display={{base: "none", md: "flex" }}>
          <motion.img
            src={Build}
            alt="Self-Paced Learning"
            style={{ height: "20rem" }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </Box>
        <Box flex="2">
          <Heading fontSize={{base: "1.5rem", md: "2.5rem" }} color={textMain} mb="1rem">
            Self-Paced Learning Experience
          </Heading>
          <Text fontSize={{base: "1rem", md: "1.25rem" }} color={textSub} lineHeight={{ base: "1.5", md: "2" }}>
            Master game development with a self-paced, gamified platform that keeps learning fun and focused. 
            Follow our Master Pathway or explore freely. Build real projects, gain multiple skills, and level up through interactive challenges — all at your own pace.
          </Text>
        </Box>
      </Flex>

      {/* Feature 2 */}
      <Flex direction="row-reverse" align="center" gap="4rem" mb="6rem">
        <Box flex="1" display={{base: "none", md: "flex" }} justifyContent="center">
          <motion.img
            src={Mentor}
            alt="Mentorship & Career Growth"
            style={{ height: "20rem" }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </Box>
        <Box flex="2">
          <Heading fontSize={{base: "1.5rem", md: "2.5rem" }} color={textMain} mb="1rem">
            Mentorship & Career Growth
          </Heading>
          <Text fontSize={{base: "1rem", md: "1.25rem" }} color={textSub} lineHeight={{ base: "1.5", md: "2" }}>
            Get personalized guidance from industry experts with 1-on-1 mentorship and portfolio reviews. 
            Prepare for game industry roles with resume tips, interview support, and deep feedback on your game mechanics, design, and storytelling.
          </Text>
        </Box>
      </Flex>

      {/* Feature 3 */}
      <Flex align="center" gap="4rem" mb="6rem">
        <Box flex="1" display={{base: "none", md: "flex" }} justifyContent="center">
          <motion.img
            src={Team}
            alt="Community & Collaboration"
            style={{ height: "20rem" }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </Box>
        <Box flex="2">
          <Heading fontSize={{base: "1.5rem", md: "2.5rem" }} color={textMain} mb="1rem">
            Community & Collaboration
          </Heading>
          <Text fontSize={{base: "1rem", md: "1.25rem" }} color={textSub} lineHeight={{ base: "1.5", md: "2" }}>
            Join a vibrant network of developers, artists, and creators. Collaborate on group projects, exchange peer feedback, 
            and engage in game jams, challenges, and showcases that keep you motivated and inspired.
          </Text>
        </Box>
      </Flex>

      {/* Feature 4 */}
      <Flex direction="row-reverse" align="center" gap="4rem">
        <Box flex="1" display={{base: "none", md: "flex" }} justifyContent="center">
          <motion.img
            src={Beyond}
            alt="Beyond Development"
            style={{ height: "20rem" }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </Box>
        <Box flex="2">
          <Heading fontSize={{base: "1.5rem", md: "2.5rem" }} color={textMain} mb="1rem">
            Beyond Development
          </Heading>
          <Text fontSize={{base: "1rem", md: "1.25rem" }} color={textSub} lineHeight={{ base: "1.5", md: "2" }}>
            Go beyond coding and learn how to publish and monetize your games. 
            From launching on Steam or mobile stores to leveraging assets and analytics tools — we help you turn games into real-world opportunities.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Features;
