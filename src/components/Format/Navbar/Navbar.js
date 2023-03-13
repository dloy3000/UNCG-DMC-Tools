import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    Image,
    IconButton,
    Heading,
    Link,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import navref from "@/data/navigation/navref.json";

//Navitems clicked to reach other pages.
function NavText() {
    const { navRef } = navref;

    const font = useColorModeValue("Aqua", "Zilap");
    const headerColor = useColorModeValue("UNCG-Primary.gold", "PanAfrican.ivory");
    const textColor = useColorModeValue("UNCG-Primary.silver", "PanAfrican.spring");


    return (
        <HStack>
            {navRef.map((navItem) => (
                <Link key={navItem.label} color={"Transparent.clear"} href={navItem.href}
                    _hover={{
                        transform: "scale(1.06, 1.06)",
                        transition: "all .3s ease",
                    }}>
                    <Heading fontSize={{ md: "4xl", lg: "5xl" }}
                        fontWeight={"light"}
                        fontFamily={font}
                        color={headerColor} px={2}
                        _hover={{
                            textColor: textColor,
                            transition: "all .3s ease",
                        }}>
                        {navItem.label}
                    </Heading>
                </Link>
            ))}
        </HStack>
    )
}

//Main navbar.
export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();

    const bgColor = useColorModeValue("UNCG-Primary.blue", "PanAfrican.darkBronze");
    const borderColor = useColorModeValue("UNCG-Primary.gold", "PanAfrican.blood");
    const avatar = useColorModeValue("image/assets/buttons/DMC_Button-Generic.png", "image/assets/buttons/DMC_Button-Sudan.png");

    return (
        <Box sx={{
            position: "-webkit-sticky",
              /* Safari */ position: "sticky",
            top: "0",
            zIndex: 99,
        }}>
            <Flex bgColor={bgColor}
                p={4} justify={"space-between"} align={"center"}>
                <Avatar name={"button"}
                    src={avatar}
                    boxSize={{ md: 12, lg: 16 }} onClick={toggleColorMode}
                    _hover={{
                        bgColor: "Transparent.clear",
                        transform: "scale(1.1, 1.1)",
                        transition: "all .3s ease",
                        src: "image/logo/DMC-Logo_Painted-Silver.png",
                    }}
                />
                <Box>
                    <NavText />
                </Box>
            </Flex>
            <Flex bgColor={borderColor} minH={1} />
        </Box >
    )
}