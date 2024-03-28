import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@app/libs/prismadb";

export async function POST(req: NextRequest){
    console.log("it work");
    const body = await req.json();
    console.log(body.data.leads);
    const newData: any = {...body.data};
    newData.leads.other = newData.leads.other.value;
    console.log(newData.leads)
    const waitlistItem = await prisma.waitlistMember.create({
        data:{
            email: newData.email,
            
            ...newData.leads

        }
    })
    return NextResponse.json({item:waitlistItem},{status:201});
}
