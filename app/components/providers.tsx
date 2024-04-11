"use client"
import { SessionProvider } from "next-auth/react";
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  
const { Select } = chakraTheme.components
  
const theme = extendBaseTheme({
    components: {
      Select,
    },  
})


export function SessionWrapper({ children }: { children: React.ReactNode}) {
    return(
        <SessionProvider>{children}</SessionProvider>
    )
}

export function ChakraWrapper({ children }: { children: React.ReactNode}) {
    return (
        <ChakraBaseProvider>{children}</ChakraBaseProvider>
    )
}