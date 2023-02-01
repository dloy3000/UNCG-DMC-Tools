import { Box } from "@chakra-ui/react";
import { ColorModeScript } from '@chakra-ui/react'
import Head from "next/head";
import NavBar from "../Navbar/Navbar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>UNCG Libraries | Digital Media Commons Tools</title>
                <link rel="icon" href="image/logo/Lakansyel-Logo5.png" />
                <meta name="description" content="Catch Unseen Movements" />
            </Head>
            <ColorModeScript initialColorMode={'theme.config.initialColorMode'} />
            <NavBar />
            {children}
            <Footer />
        </>
    )
}