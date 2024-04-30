"use server"
import prisma from "@app/libs/prismadb";

export default async function getWaitlist() {
    const waitlistMembers = await prisma.waitlistMember.findMany();
    return waitlistMembers;
}