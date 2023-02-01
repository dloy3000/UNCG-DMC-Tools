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
    return (
        <HStack>
            {navRef.map((navItem) => (
                <Link color={"Transparent.clear"} href={navItem.href}
                    _hover={{
                        transform: "scale(1.06, 1.06)",
                        transition: "all .3s ease",
                    }}>
                    <Heading fontSize={{ md: "4xl", lg: "5xl" }}
                        fontWeight={"light"}
                        fontFamily={useColorModeValue("Aqua", "Zilap")}
                        color={useColorModeValue("UNCG-Primary.gold", "PanAfrican.ivory")} px={2}
                        _hover={{
                            textColor: useColorModeValue("UNCG-Primary.silver", "PanAfrican.spring"),
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

    return (
        <Box sx={{
            position: "-webkit-sticky",
              /* Safari */ position: "sticky",
            top: "0",
            zIndex: 99,
        }}>
            <Flex bgColor={useColorModeValue("UNCG-Primary.blue", "PanAfrican.darkBronze")}
                p={4} justify={"space-between"} align={"center"}>
                <Avatar name={"button"}
                    src={useColorModeValue("image/assets/buttons/DMC_Button-Generic.png", "image/assets/buttons/DMC_Button-Sudan.png")}
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
            <Flex bgColor={useColorModeValue("UNCG-Primary.gold", "PanAfrican.blood")} minH={1} />
        </Box >
    )
}