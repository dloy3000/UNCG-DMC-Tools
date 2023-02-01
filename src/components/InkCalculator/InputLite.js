import {
    Heading,
    Box,
    Flex,
    VStack,
    Grid,
    GridItem,
    Text,
    useColorModeValue,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input,
    Stat,
    StatLabel,
    StatNumber,
    Divider
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FontMode from "../Util/FontMode";

export default function InputLite() {
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [ink, setInk] = useState(0.03);
    const [paper, setPaper] = useState(0.35);

    const [inkCost, setInkCost] = useState(length * width * ink);
    const [feetLength, setFeetLength] = useState(length / 12.0);
    const [paperCost, setPaperCost] = useState((length / 12.0) * paper);

    const handleLength = (e) => setLength(e.target.value);
    const handleWidth = (e) => setWidth(e.target.value);
    const handleInk = (e) => setInk(e.target.value);
    const handlePaper = (e) => setPaper(e.target.value);

    //Reload calculation upon input change.
    useEffect(() => {
        setInkCost(length * width * ink);
        setFeetLength(length / 12.0);
        setPaperCost((length / 12.0) * paper);
    }, [length, width, ink, paper]);

    const { heading, body, headingSize, bodySize } = FontMode();
    const statSize = useColorModeValue({ md: "4xl", lg: "6xl" }, { md: "6xl", lg: "8xl" });

    return (
        <Box>
            <Flex bgColor={useColorModeValue("UNCG-Primary.silver", "PanAfrican.legion")}
                justify={"center"} textAlign={"left"} py={{ md: 8, lg: 12 }}>
                <Grid gap={{ md: 2, lg: 8 }}
                    templateAreas={
                        `"Header Header"
                        "Text Text"
                        "Length Width"
                        "Ink Paper"
                        "InkCost PaperCost"
                        "FeetLength TotalCost"`
                    }>
                    <GridItem area={"Header"} textAlign={"center"}>
                        <Heading fontSize={headingSize}
                            fontWeight={"light"}
                            fontFamily={heading}
                            color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.gold")}>
                            Simple Print Calculator
                        </Heading>
                    </GridItem>
                    <GridItem area={"Text"} textAlign={"center"}>
                        <Text fontSize={bodySize}
                            fontWeight={"medium"}
                            fontFamily={body}
                            color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                            maxW={{ md: "400px", lg: "520px" }}>
                            This is a simple calculator to calculate the price of prints based on dimensions and paper use.
                        </Text>
                    </GridItem>

                    <GridItem area={"Length"}>
                        <FormControl isInvalid={length === ""}>
                            <FormLabel>
                                <Text fontSize={bodySize}
                                    fontWeight={"medium"}
                                    fontFamily={body}
                                    color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                    maxW={{ md: "400px", lg: "520px" }}>
                                    Length
                                </Text>
                            </FormLabel>
                            <Input bgColor={useColorModeValue("UNCG-Secondary.steel", "PanAfrican.darkBronze")}
                                type={"number"} value={length} onChange={handleLength} />
                            {length !== "" ? (
                                <FormHelperText>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Enter Length in inches.
                                    </Text>
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Length is required.
                                    </Text>
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </GridItem>

                    <GridItem area={"Width"}>
                        <FormControl isInvalid={width === ""}>
                            <FormLabel>
                                <Text fontSize={bodySize}
                                    fontWeight={"medium"}
                                    fontFamily={body}
                                    color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                    maxW={{ md: "400px", lg: "520px" }}>
                                    Width
                                </Text>
                            </FormLabel>
                            <Input bgColor={useColorModeValue("UNCG-Secondary.steel", "PanAfrican.darkBronze")}
                                type={"number"} value={width} onChange={handleWidth} />
                            {width !== "" ? (
                                <FormHelperText>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Enter Width in inches.
                                    </Text>
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Width is required.
                                    </Text>
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </GridItem>

                    <GridItem area={"Ink"}>
                        <FormControl isInvalid={ink === ""}>
                            <FormLabel>
                                <Text fontSize={bodySize}
                                    fontWeight={"medium"}
                                    fontFamily={body}
                                    color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                    maxW={{ md: "400px", lg: "520px" }}>
                                    Ink
                                </Text>
                            </FormLabel>
                            <Input bgColor={useColorModeValue("UNCG-Secondary.steel", "PanAfrican.darkBronze")}
                                type={"number"} value={ink} onChange={handleInk} />
                            {ink !== "" ? (
                                <FormHelperText>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Enter Ink cost.
                                    </Text>
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Ink is required.
                                    </Text>
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </GridItem>

                    <GridItem area={"Paper"}>
                        <FormControl isInvalid={paper === ""}>
                            <FormLabel>
                                <Text fontSize={bodySize}
                                    fontWeight={"medium"}
                                    fontFamily={body}
                                    color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                    maxW={{ md: "400px", lg: "520px" }}>
                                    Paper
                                </Text>
                            </FormLabel>
                            <Input bgColor={useColorModeValue("UNCG-Secondary.steel", "PanAfrican.darkBronze")}
                                type={"number"} value={paper} onChange={handlePaper} />
                            {paper !== "" ? (
                                <FormHelperText>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Enter Paper cost.
                                    </Text>
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Paper is required.
                                    </Text>
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </GridItem>

                    <GridItem area={"InkCost"}>
                        <Box bgColor={useColorModeValue("UNCG-Secondary.steel", "PanAfrican.darkBronze")}
                            p={{ md: 2, lg: 4 }} borderRadius={12} border={"1px"} textAlign={"center"}
                            borderColor={useColorModeValue("UNCG-Secondary.blue", "PanAfrican.mudbrick")}>
                            <Stat>
                                <StatLabel>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Estimated Ink Cost
                                    </Text>
                                </StatLabel>
                                <StatNumber>
                                    <Text fontSize={statSize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        ${inkCost.toFixed(2)}
                                    </Text>
                                </StatNumber>
                            </Stat>
                        </Box>
                    </GridItem>

                    <GridItem area={"FeetLength"}>
                        <Box bgColor={useColorModeValue("UNCG-Secondary.steel", "PanAfrican.darkBronze")}
                            p={{ md: 2, lg: 4 }} borderRadius={12} border={"1px"} textAlign={"center"}
                            borderColor={useColorModeValue("UNCG-Secondary.blue", "PanAfrican.mudbrick")}>
                            <Stat>
                                <StatLabel>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Paper Length in Feet
                                    </Text>
                                </StatLabel>
                                <StatNumber>
                                    <Text fontSize={statSize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        {feetLength.toFixed(2)}
                                    </Text>
                                </StatNumber>
                            </Stat>
                        </ Box>
                    </GridItem>

                    <GridItem area={"PaperCost"}>
                        <Box bgColor={useColorModeValue("UNCG-Secondary.steel", "PanAfrican.darkBronze")}
                            p={{ md: 2, lg: 4 }} borderRadius={12} border={"1px"} textAlign={"center"}
                            borderColor={useColorModeValue("UNCG-Secondary.blue", "PanAfrican.mudbrick")}>
                            <Stat>
                                <StatLabel>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Estimated Paper Cost
                                    </Text>
                                </StatLabel>
                                <StatNumber>
                                    <Text fontSize={statSize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        ${paperCost.toFixed(2)}
                                    </Text>
                                </StatNumber>
                            </Stat>
                        </ Box>
                    </GridItem>

                    <GridItem area={"TotalCost"}>
                        <Box bgColor={useColorModeValue("UNCG-Secondary.steel", "PanAfrican.darkBronze")}
                            p={{ md: 2, lg: 4 }} borderRadius={12} border={"1px"} textAlign={"center"}
                            borderColor={useColorModeValue("UNCG-Secondary.blue", "PanAfrican.mudbrick")}>
                            <Stat>
                                <StatLabel>
                                    <Text fontSize={bodySize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        Estimated Final Cost
                                    </Text>
                                </StatLabel>
                                <StatNumber>
                                    <Text fontSize={statSize}
                                        fontWeight={"medium"}
                                        fontFamily={body}
                                        color={useColorModeValue("UNCG-Primary.blue", "PanAfrican.ivory")}
                                        maxW={{ md: "400px", lg: "520px" }}>
                                        ${(paperCost + inkCost).toFixed(2)}
                                    </Text>
                                </StatNumber>
                            </Stat>
                        </ Box>
                    </GridItem>
                    <GridItem py={{ md: 4, lg: 12 }} colSpan={2}>
                        <Divider height={"1px"} bgColor={useColorModeValue("UNCG-Primary.blue", "PanAfrican.mudbrick")} />
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    )
}