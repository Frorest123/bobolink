import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req){
    console.log("it work")
    const prisma = new PrismaClient()
    const body = await req.json()
    const email = body.email
    console.log(body)
    const waitlistItem = await prisma.waitlistMember.create({
        data:{
            email:email
        }
    })
    return NextResponse.json({item:waitlistItem},{status:201})
}
