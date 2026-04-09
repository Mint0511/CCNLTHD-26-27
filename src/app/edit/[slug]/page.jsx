import { getAuthSession } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import prisma from "@/app/utils/connect";
import EditPageClient from "@/app/components/edit/EditPageClient";

const EditPage = async ({ params }) => {
    const { slug } = await params;
    const session = await getAuthSession();

    if (!session) {
        redirect("/login");
    }

    const post = await prisma.post.findUnique({
        where: { slug },
    });

    if (!post) {
        redirect("/");
    }

    if (post.userEmail !== session.user.email) {
        redirect("/");
    }

    // Convert dates to strings for client components
    const serializedPost = {
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt ? post.updatedAt.toISOString() : null,
    };

    return <EditPageClient post={serializedPost} slug={slug} />;
};

export default EditPage;
