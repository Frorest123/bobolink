import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export default function POST(req){
    const prisma = new PrismaClient()
    const body = req.json()
    const email = body.email
    const waitlistItem = prisma.waitlistMember.create({
        data:{
            email:email
        }
    })
    return NextResponse.json({item:waitlistItem},{status:201})
}
