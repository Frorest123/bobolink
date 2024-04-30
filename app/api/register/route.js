import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import prisma from "@app/libs/prismadb"

export async function POST(req){
    const body = await req.json();
    const {username, password } = body.data;

    // console.log( body)

    if (!password || !username) {
        return new NextResponse('Missing Field', {status: 400})
    }

    const exist = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    console.log(exist)

    if (exist) {
        return new NextResponse('User with username already exists', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            username,
            hashedPassword,
        }
    })

    return NextResponse.json(user)

}