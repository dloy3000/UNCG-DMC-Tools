import {
    extendTheme,
    useColorModeValue
} from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools";
import palette from "../../data/theme/palette.json";
import { font } from "../../data/theme/font.json";

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

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

const styles = {
    styles: {
        global: (props) => ({
            body: {
                bg: mode("UNCG-Primary.silver", "PanAfrican.legion")(props)
            },
            "::-webkit-scrollbar": {
                width: "14px",
                height: "8px",
                padding: "4px",
                outline: mode("2px solid #0f2044", "2px solid #1F1D1B")(props)
            },
            "::-webkit-scrollbar-track": {
                background: mode("#0f2044", "#1F1D1B")(props)
            },
            "::-webkit-scrollbar-thumb": {
                background: mode("#ffb71b", "#F7F0DF")(props),
                "border-radius": "12px"
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: mode("#bec0c2", "#009850")(props)
            }
        })
    }
}

const { generic, panAfrican } = font;
console.log(generic);
const fonts = {
    fonts: {
        heading: generic.heading,
        body: panAfrican.body
    }
}

const theme = extendTheme(palette, fonts, styles, { config }, { breakpoints });
console.log(theme);

export default theme;