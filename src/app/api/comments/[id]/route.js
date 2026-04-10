import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/app/utils/auth";

// DELETE A COMMENT
export const DELETE = async (req, { params }) => {
  const { id } = await params;
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }),
      { status: 401 }
    );
  }

  try {
    const comment = await prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      return new NextResponse(
        JSON.stringify({ message: "Comment not found!" }),
        { status: 404 }
      );
    }

    // Check if the user is the author of the comment
    if (comment.userEmail !== session.user.email) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authorized!" }),
        { status: 403 }
      );
    }

    await prisma.comment.delete({
      where: { id },
    });

    return new NextResponse(
      JSON.stringify({ message: "Comment deleted successfully!" }),
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
