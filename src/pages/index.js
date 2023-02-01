import {
  Box,
  Flex,
  Heading,
  Text
} from "@chakra-ui/react";
import { useRef } from "react";

export default function HomePage() {
  // enable smooth scrolling effect
  const scrollToDiv = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  const myRef = useRef();

  return (
    <Box>
    </Box>
  )
}
