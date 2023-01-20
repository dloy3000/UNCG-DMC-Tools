import {
    Heading,
    Text,
    Link,
    Tag,
    Box,
} from "@chakra-ui/react";

//Formats text using a special format syntax. 
export function FormattedText({ text, URLs }) {
    // BELOW SYNTAX SHOULD BE CHANGED TO MORE STANDARD ONES LATER.

    // <it>TEXT</it> = Italicize
    // <bd>TEXT</bd> = Bold
    // <sb>TEXT</sb> = Semi-Bold
    // <st>TEXT</st> = Strikethrough
    // <ur>TEXT</ul> = Underline
    // <sh>TEXT</sh> = Semi-Header (Increased text size, changed font)


    //Used to store current formatters.
    const format = {
        italicize: "it",
        bold: "bd",
        semibold: "sb",
        strikethrough: "st",
        underline: "ul",
        semiheader: "sh",
        link: "li"
    }

    //Uses mode to index proper formatting functions.
    const modeSwitch = [
        StandardText,
        ItalicText,
        BoldText,
        SemiBoldText,
        StrikeThroughText,
        UnderlineText,
        SemiHeaderText,
        LinkText
    ];

    //Array of objects containing the text and mode to render.
    let parsedText = [];

    //Array of UI objects containing formatted text.
    let formattedText = [];

    //Temporary string to store a block of text within a formatter.
    let tempText = "";

    //Current mode, where 0 is normal text, and 1 through n corresponds with format.
    let mode = 0;

    //Used to track index of embeds.
    let hrefCounter = 0;


    //Parse out formatters and store text and formatting information.
    for (let i = 0; i < text.length; i++) {
        //FIRST PARSE OUT FORMATTERS AND TOGGLE APPROPRIATE BOOLEANS.\

        //Store previous mode.
        const tempMode = mode;

        //Searching for a terminal formatter.
        if (((text.charAt(i) + text.charAt(i + 1)) === "</") && (i < text.length - 4)) {
            mode = 0;

            i += 4 //Skip the formatter so it isn't printed as text.

            //Store current text and mode.
            const textBlock = {
                mode: tempMode,
                text: tempText
            }

            parsedText.push(textBlock);
            tempText = "";
        }
        //Searching for a heading formatter.
        else if ((text.charAt(i) === "<") && (i < text.length - 3)) {
            const formatter = text.charAt(i) + text.charAt(i + 1) + text.charAt(i + 2) + text.charAt(i + 3);
            switch (formatter) {
                case "<" + format.italicize + ">":
                    mode = 1;
                    break;
                case "<" + format.bold + ">":
                    mode = 2;
                    break;
                case "<" + format.semibold + ">":
                    mode = 3;
                    break;
                case "<" + format.strikethrough + ">":
                    mode = 4;
                    break;
                case "<" + format.underline + ">":
                    mode = 5;
                    break;
                case "<" + format.semiheader + ">":
                    mode = 6;
                    break;
                case "<" + format.link + ">":
                    mode = 7;
                    break;
            }

            i += 3 //Skip the formatter so it isn't printed as text.

            //Store current text and mode.
            const textBlock = {
                mode: tempMode,
                text: tempText
            }

            parsedText.push(textBlock);
            tempText = "";
        }
        //Aggregate text.
        else {
            tempText += text.charAt(i);
        }
    }

    //Store current text and mode.
    const textBlock = {
        mode: mode,
        text: tempText
    }

    parsedText.push(textBlock);
    tempText = "";


    //Return all text in proper format.
    for (let j = 0; j < parsedText.length; j++) {
        //Retrieve next object from parsedText and set formatting function.
        const textBlock = parsedText[j];
        const textFormatter = modeSwitch[textBlock.mode];

        //Return with next href if format is LinkText.
        if (textBlock.mode === 7) {
            formattedText.push(textFormatter(textBlock.text, URLs[hrefCounter]));
            hrefCounter += 1;
        } else {
            formattedText.push(textFormatter(textBlock.text));
        }

    }

    console.log(parsedText);

    return (
        <Box display={"block"}>
            {
                formattedText
            }
        </Box>
    );
}

//Mode 0
export function StandardText(text) {
    return (
        <Text fontSize={{ base: "lg", md: "xl" }}
            textColor={"braveNeutral.lotion"}
            display={"inline"}>
            {text}
        </Text>
    )
}

//Mode 1
export function ItalicText(text) {
    return (
        <Text as={"i"}
            fontSize={{ base: "lg", md: "xl" }}
            textColor={"braveNeutral.lotion"}
            display={"inline"}>
            {text}
        </Text>
    )
}

//Mode 2
export function BoldText(text) {
    return (
        <Text as={"b"}
            fontSize={{ base: "lg", md: "xl" }}
            textColor={"braveNeutral.lotion"}
            display={"inline"}>
            {text}
        </Text>
    )
}

//Mode 3
export function SemiBoldText(text) {
    return (
        <Text as={"b"}
            fontSize={{ base: "lg", md: "xl" }}
            textColor={"braveNeutral.lotion"}
            display={"inline"}
            fontWeight={"semibold"}>
            {text}
        </Text>
    )
}

//Mode 4
export function StrikeThroughText(text) {
    return (
        <Text as={"s"}
            fontSize={{ base: "lg", md: "xl" }}
            textColor={"braveNeutral.lotion"}
            display={"inline"}>
            {text}
        </Text>
    )
}

//Mode 5
export function UnderlineText(text) {
    return (
        <Text as={"u"}
            fontSize={{ base: "lg", md: "xl" }}
            textColor={"braveNeutral.lotion"}
            display={"inline"}>
            {text}
        </Text>
    )
}

//Mode 6
export function SemiHeaderText(text) {
    return (
        <Heading as={"h4"}
            fontSize={{ base: "xl", md: "2xl" }}
            textColor={"braveNeutral.lotion"}
            display={"inline"}
            fontWeight={"semibold"}>
            {text}
        </Heading>
    )
}

//Mode 1
export function LinkText(text, link) {
    return (
        <Link href={link.embedURL}
            className={link.embedName}
            fontSize={{ base: "lg", md: "xl" }}
            textColor={"braveBlue.brandeis"}
            display={"inline"}
            isExternal>
            {text}
        </Link>
    )
}