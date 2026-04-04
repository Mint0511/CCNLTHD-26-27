import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
import { use } from "react";

export const GET = async (req, { params }) => {
  const { slug } = await params;

  try {
    const data = await prisma.post.findUnique({
      where: { slug },
      include: {user: true}
    });

    if (!data) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found!" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify(data),
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};