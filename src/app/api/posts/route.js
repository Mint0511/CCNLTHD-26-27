import { getAuthSession } from "@/app/utils/auth";
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server"

export const GET = async (req) => {

    const { searchParams } = new URL(req.url);

    const pageStr = searchParams.get("page");
    const page = pageStr && pageStr !== "undefined" ? parseInt(pageStr) : 1;
    const cat = searchParams.get("cat");
    const sort = searchParams.get("sort");
    const userEmail = searchParams.get("userEmail");
    
    // Lấy từ khóa tìm kiếm (search) từ URL query string
    const search = searchParams.get("search");

    const POSTS_PER_PAGE = 3;

    // Cấu hình query truy vấn Database
    const query = {
        take: POSTS_PER_PAGE,
        skip: POSTS_PER_PAGE * (page - 1),
        where: {
            // Nếu có Category (cat), sẽ lọc theo Category
            ...(cat && { catSlug: cat }),
            // Nếu có userEmail, sẽ lọc theo tác giả
            ...(userEmail && { userEmail }),
            // Nếu có từ khóa tìm kiếm (search), sẽ dùng toán tử OR để tìm trong Tiêu đề hoặc Nội dung
            ...(search && {
                OR: [
                    { title: { contains: search, mode: "insensitive" } }, // Tìm trong Tiêu đề (không phân biệt hoa thường)
                    { desc: { contains: search, mode: "insensitive" } },  // Tìm trong Nội dung (không phân biệt hoa thường)
                ],
            }),
        },
        include: { user: true },
        ...(sort === "views" && {
            orderBy: {
                views: "desc",
            },
        }),
    };

    if (!pageStr || pageStr === "undefined") {
        delete query.skip;
        query.take = 3;
    }

    try {

        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where:query.where}),
        ]);
        return new NextResponse(
            JSON.stringify({posts, count}),
            { status: 200 }
        );

    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!", error: error.message }),
            { status: 500 }
        );
    }
};

//CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession()
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: {...body, userEmail: session.user.email},
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