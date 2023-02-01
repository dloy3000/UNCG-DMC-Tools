import { useColorModeValue } from "@chakra-ui/react";
import theme from "../Theme/Theme";

//Stores global font formatting to be used with ColorMode.
export default function FontMode() {
    const heading = useColorModeValue("Aqua", "Asgalt");
    const body = useColorModeValue("Muli", "Modeka");

    const headingSize = useColorModeValue({ md: "3xl", lg: "4xl" }, { md: "7xl", lg: "8xl" });
    const bodySize = useColorModeValue({ md: "lg", lg: "xl" }, { md: "2xl", lg: "3xl" });

    const fontMode = {
        heading: heading,
        body: body,
        headingSize: headingSize,
        bodySize: bodySize
    }

    return fontMode;
}