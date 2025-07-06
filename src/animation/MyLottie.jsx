import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

const MyLottie = () => (
  <Box w="500px" h="500px">
    <Lottie animationData={animationData} loop autoplay />
  </Box>
);

export default MyLottie;