import { getAuthSession } from "@/app/utils/auth";
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

//GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = await params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true }
    });

    return new NextResponse(
      JSON.stringify(post),
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

// DELETE POST
export const DELETE = async (req, { params }) => {
  const { slug } = await params;
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }),
      { status: 401 }
    );
  }

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found!" }),
        { status: 404 }
      );
    }

    if (post.userEmail !== session.user.email) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authorized!" }),
        { status: 403 }
      );
    }

    await prisma.post.delete({
      where: { slug },
    });

    return new NextResponse(
      JSON.stringify({ message: "Post deleted successfully!" }),
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

// UPDATE POST
export const PATCH = async (req, { params }) => {
  const { slug } = await params;
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found!" }),
        { status: 404 }
      );
    }

    if (post.userEmail !== session.user.email) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authorized!" }),
        { status: 403 }
      );
    }

    // eslint-disable-next-line no-unused-vars
    const { id, createdAt, userEmail, ...updateData } = body;

    const updatedPost = await prisma.post.update({
      where: { slug },
      data: { ...updateData },
    });

    return new NextResponse(
      JSON.stringify(updatedPost),
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