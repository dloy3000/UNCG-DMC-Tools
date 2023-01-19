import {
    extendTheme,
    useColorModeValue
} from "@chakra-ui/react"
import palette from "../../data/theme/palette.json";
import font from "../../data/theme/font.json";

//Updated version default breakpoints
const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
    '3xl': '124em',
    '4xl': '148em',
    '5xl': '240em',
    '6xl': '320em',
}

const theme = extendTheme(palette, font, { breakpoints });

export default theme;