"use server"

import client from "../libs/prismadb";



export default async function getWaitlist() {

    const waitlist = await prisma.waitlistMember.findMany();

    return waitlist;
}