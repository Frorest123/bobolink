import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@app/libs/prismadb";

export async function POST(req: NextRequest) {
    
    console.log("it work");
    const body = await req.json();

    if (!body.data.email) {
        console.log('ur fat')
        console.log(body)
        return NextResponse.json({error: 'you suck'},{status:400});
    }

    const newData: any = {...body.data};
    console.log(newData.leads.other.checked)
    newData.leads.other = newData.leads.other.value;
    

    const waitlistItem = await prisma.waitlistMember.create({
        data:{
            email: newData.email,
            leadList: {
                create: {
                    ...newData.leads
                }
            }
        }
    })


    return NextResponse.json({item:waitlistItem},{status:201});
}