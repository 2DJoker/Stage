import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function GET() {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    const data = await req.json();

    const user = await prisma.user.create({
        data
    });


    return NextResponse.json(user);
}
