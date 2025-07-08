import {
  Box,
  Text,
  Flex,
  Button,
  Image,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import MyLottie from "./animation/MyLottie";
import GodotLogo from "./assets/godot.svg";
import PlaystationLogo from "./assets/playstation.svg";
import RockStarLogo from "./assets/rockstar.svg";
import UnityLogo from "./assets/unity.svg";
import UnrealELogo from "./assets/unrealE.svg";
import RiotLogo from "./assets/riot.svg";
import EpicGamesLogo from "./assets/epicgames.svg";

const Hero = () => {
  const bgHero = useColorModeValue("teal.50", "gray.800");
  const textMain = useColorModeValue("teal.800", "teal.100");
  const textSub = useColorModeValue("teal.700", "teal.200");
  const textMuted = useColorModeValue("teal.600", "teal.300");
  const btnBg = useColorModeValue("teal.600", "teal.400");
  const btnHover = useColorModeValue("teal.700", "teal.300");
  const marqueeBg = useColorModeValue("teal.600", "teal.700");
  const logoSectionBg = useColorModeValue("teal.50", "gray.800");

  return (
    <>
      {/* Hero section */}
      <Flex
        minH={{ base: "57vh", md: "calc(100vh - 10rem)" }}
        px={{base: "2rem", md: "6rem"}}
        align="center"
        justify="space-between"
        bg={bgHero}
        flexDir="row"
        position="relative"
        overflow="hidden"
        boxShadow="sm"
      >
        {/* Left section */}
        <Flex direction="column" w="40rem" align={{base: "center", md: "flex-start"}} textAlign={{base: "center", md: "left"}}>
          <Text fontSize={{ base: "3xl", md: "5xl"}} fontWeight="bold" color={textMain} lineHeight="1.2">
            Learn Game Development from Scratch
          </Text>

          <Text fontSize={{ base: "md", md: "lg"}} mt="1.2rem" mb="0.7rem" color={textSub}>
            Master Unity, Unreal, and more — with structured lessons, real projects, and expert mentors.
          </Text>

          <Text fontSize={{ base: "sm", md: "md"}} color={textMuted} mb="2rem">
            Join 10,000+ aspiring and expert game developers learning together.
          </Text>

          <Button
            bg={btnBg}
            color="white"
            size={{ base: "md", md: "lg" }}
            px="2rem"
            py="1.5rem"
            fontWeight="medium"
            borderRadius="xl"
            _hover={{ bg: btnHover, boxShadow: "lg" }}
            transition="all 0.3s ease"
          >
            Get Started
          </Button>
        </Flex>

        {/* Right section */}
        <Box
          position="relative"
          w="40rem"
          display={{ base: "none", md: "block" }}
          justifyContent="center"
          alignItems="center"
        >
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
                fill={useColorModeValue("#a0e5e0", "#2C7A7B")} // teal in dark mode
                d="M50.6,-51.9C62.1,-39.1,65.4,-19.6,65.9,0.5C66.4,20.5,64,41.1,52.5,54.3C41.1,67.6,20.5,73.7,-0.5,74.2C-21.5,74.6,-42.9,69.5,-56.4,56.2C-69.9,42.9,-75.3,21.5,-71.8,3.5C-68.3,-14.4,-55.8,-28.9,-42.3,-41.6C-28.9,-54.3,-14.4,-65.4,2.6,-68C19.6,-70.5,39.1,-64.6,50.6,-51.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </Box>

          <Box zIndex={1}>
            <MyLottie />
          </Box>
        </Box>
      </Flex>

      {/* Marquee section */}
      <Box h={{ base: "3rem", md: "5.95rem" }} bg={marqueeBg} overflow="hidden" display="flex" alignItems="center">
        <Marquee gradient={false} speed={50}>
          {[
            "Unity",
            "Unreal Engine",
            "Godot",
            "C#",
            "Blueprints",
            "Level Design",
            "Animation",
            "AI in Games",
            "Multiplayer",
          ].map((tech, i) => (
            <Text
              key={i}
              fontSize={{ base: "xl", md: "3xl" }}
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

      {/* Logo section */}
      <Box bg={logoSectionBg} p="4rem 2rem 0 2rem">
        <Text fontSize={{ base: "1.5rem", md: "2.1rem" }} fontWeight="bold" color={textMain} mb="2rem" align="center">
          Trusted by professionals and learners from organizations such as
        </Text>
        <Flex gap="4rem" align="center" justify="space-evenly" wrap="wrap">
          <Box h={{ base: "3rem", md: "5rem" }} w={{ base: "3rem", md: "5rem" }}>
            <Image src={GodotLogo} />
          </Box>
          <Box h={{ base: "3rem", md: "5rem" }} w={{ base: "3rem", md: "5rem" }}>
            <Image src={PlaystationLogo} />
          </Box>
          <Box h={{ base: "3rem", md: "5rem" }} w={{ base: "3rem", md: "5rem" }}>
            <Image src={RockStarLogo} alt="RockStar Logo" />
          </Box>
          <Box h={{ base: "3rem", md: "5rem" }} w={{ base: "3rem", md: "5rem" }}>
            <Image src={UnityLogo} />
          </Box>
          <Box h={{ base: "3rem", md: "5rem" }} w={{ base: "3rem", md: "5rem" }}>
            <Image src={UnrealELogo} />
          </Box>
          <Box h={{ base: "3rem", md: "5rem" }} w={{ base: "3rem", md: "5rem" }}>
            <Image src={RiotLogo} />
          </Box>
          <Box h={{ base: "3rem", md: "5rem" }} w={{ base: "3rem", md: "5rem" }}>
            <Image src={EpicGamesLogo} />
          </Box>
        </Flex>
        <Spacer h="4rem" />
      </Box>
    </>
  );
};

export default Hero;
