"use client"
import { SessionProvider } from "next-auth/react";
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  
const { Select, Input, Link } = chakraTheme.components
  
const theme = extendBaseTheme({
    components: {
      Select,
      Input,
      Link
    },  
})


export function SessionWrapper({ children }: { children: React.ReactNode}) {
    return(
        <SessionProvider>{children}</SessionProvider>
    )
}

export function ChakraWrapper({ children }: { children: React.ReactNode}) {
    return (
        <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    )
}