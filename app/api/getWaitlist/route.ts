import { NextRequest, NextResponse } from "next/server";
import prisma from "@app/libs/prismadb"

export async function GET() {
    // const waitlistMembers = await prisma.waitlistMember.findMany();
    return NextResponse.json({waitlist: [{id: 7, email: "test@testmail.jawn", leads: "wordOfMouth"}]}, {status: 200});
}
