import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import prisma from "@app/libs/prismadb"

export async function POST(req){
    const body = await req.json();
    const {email, password } = body.data;

    // console.log( body)

    if (!password || !email) {
        return new NextResponse('Missing Field', {status: 400})
    }

    const exist = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    console.log(exist)

    if (exist) {
        return new NextResponse('User with email already exists', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword,
        }
    })

    return NextResponse.json(user)

}