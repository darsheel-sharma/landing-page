import { Box, Text, Flex, Button, Image, Spacer } from "@chakra-ui/react";
import Marquee from "react-fast-marquee"; 
import MyLottie from "./animation/MyLottie";
import GodotLogo from "./assets/godot.svg";
import PlaystationLogo from "./assets/playstation.svg"
import RockStarLogo from "./assets/rockstar.svg"
import UnityLogo from "./assets/unity.svg"
import UnrealELogo from "./assets/unrealE.svg"
import RiotLogo from "./assets/riot.svg"
import EpicGamesLogo from "./assets/epicgames.svg"

const Hero = () => {
  return (
    <>
    <Flex
      h="33rem"
      px="6rem"
      py="2rem"
      align="center"
      justify="space-between"
      bg="teal.50" // updated
      flexDir="row"
      position="relative"
      overflow="hidden"
      boxShadow="sm"
    >
      {/* Left Text Section */}
      <Flex
        direction="column"
        w="40rem"
        align="flex-start"
        textAlign="left"
      >
        <Text
          fontSize="5xl"
          fontWeight="bold"
          color="teal.800" // updated
          lineHeight="1.2"
        >
          Learn Game Development from Scratch
        </Text>

        <Text fontSize="lg" mt="1.2rem" mb="0.7rem" color="teal.700"> {/* updated */}
          Master Unity, Unreal, and more — with structured lessons, real projects, and expert mentors.
        </Text>

        <Text fontSize="md" color="teal.600" mb="2rem"> {/* updated */}
          Join 10,000+ aspiring and expert game developers learning together.
        </Text>

        <Button
          bg="teal.600" // updated
          color="white"
          size="lg"
          px="2rem"
          py="1.5rem"
          fontWeight="medium"
          borderRadius="xl"
          _hover={{ bg: "teal.700", boxShadow: "lg" }} // updated
          transition="all 0.3s ease"
        >
          Get Started
        </Button>
      </Flex>

      {/* Right Animation Section with SVG Blob */}
      <Box
        position="relative"
        w="40rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Blob SVG background */}
        <Box
          position="absolute"
          top="55%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="50rem"
          h="45rem"
          zIndex={0}
        >
          <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <path
              fill="#a0e5e0" // softened teal
              d="M50.6,-51.9C62.1,-39.1,65.4,-19.6,65.9,0.5C66.4,20.5,64,41.1,52.5,54.3C41.1,67.6,20.5,73.7,-0.5,74.2C-21.5,74.6,-42.9,69.5,-56.4,56.2C-69.9,42.9,-75.3,21.5,-71.8,3.5C-68.3,-14.4,-55.8,-28.9,-42.3,-41.6C-28.9,-54.3,-14.4,-65.4,2.6,-68C19.6,-70.5,39.1,-64.6,50.6,-51.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </Box>

        {/* Lottie animation in front */}
        <Box zIndex={1}>
          <MyLottie />
        </Box>
      </Box>
    </Flex>

    <Box h="5.95rem" bg="teal.600" overflow="hidden" display="flex" alignItems="center"> {/* updated */}
        <Marquee gradient={false} speed={50}>
            {["Unity", "Unreal Engine", "Godot", "C#", "Blueprints", "Level Design", "Animation", "AI in Games", "Multiplayer"].map((tech, i) => (
              <Text
                key={i}
                fontSize="3xl"
                color="white"
                mx="4rem"
                fontWeight="bold"
                textShadow="-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black"
              >
                {tech}
              </Text>
            ))}
        </Marquee>
    </Box>

    <Box bg="teal.50" p="4rem 2rem 0 2rem"> {/* updated */}
        <Text fontSize="2.1rem" fontWeight="bold" color="teal.800" mb="2rem" align="center"> {/* updated */}
            Trusted by professionals and learners from organizations such as
        </Text>
        <Flex gap="4rem" align="center" justify="space-evenly">
            <Box h="5rem" w="5rem">
                <Image src={GodotLogo} />
            </Box>
            <Box h="5rem" w="5rem">
                <Image src={PlaystationLogo} />
            </Box>
            <Box h="5rem" w="5rem">
                <Image src={RockStarLogo} />
            </Box>
            <Box h="5rem" w="5rem">
                <Image src={UnityLogo} />
            </Box>
            <Box h="5rem" w="5rem">
                <Image src={UnrealELogo} />
            </Box>
            <Box h="5rem" w="5rem">
                <Image src={RiotLogo} />
            </Box>
            <Box h="5rem" w="5rem">
                <Image src={EpicGamesLogo} />
            </Box>
        </Flex>
        <Spacer h="4rem"></Spacer>
    </Box>
    </>
  );
};

export default Hero;
