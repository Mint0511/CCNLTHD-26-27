import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server"

export const GET = async (req) => {

    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page")

    const POSTS_PER_PAGE = 2;

    try {

        const posts = await prisma.post.findMany({take: POSTS_PER_PAGE, skip: POSTS_PER_PAGE * (page - 1)});

        return new NextResponse(
            JSON.stringify(posts),
            { status: 200 }
        );

    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};