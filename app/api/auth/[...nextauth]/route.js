import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
require('dotenv').config();
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@app/libs/prismadb"


const authOptions = {

    adapter: PrismaAdapter(prisma),

    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {

                // feel free to change these. These are how you login and what you need on the signin screen
                email: {label: "Email", type: "email"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials) {

                console.log(credentials);

                if(!credentials.password || !credentials.email) {
                    console.log('missing data')
                    return null;
                }

                const prisma = new PrismaClient;

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user){
                    console.log('user does not exist')
                    return null;
                }

                const compare = await bcrypt.compare(credentials.password, user.hashedPassword);

                console.log("bob");

                if (!compare) {
                    console.log('wrong password')
                    return null;
                }

                console.log('authed')
                return user;
            } 
        }),
    ],
    session: {
        strategy: "jwt"
    },
    pages: {

    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };