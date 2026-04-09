import styles from "./profile.module.css";
import { getAuthSession } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import prisma from "@/app/utils/connect";
import ProfileClient from "@/app/components/profile/ProfileClient";

const ProfilePage = async () => {
  const session = await getAuthSession();

  if (!session) {
    redirect("/login");
  }

  const posts = await prisma.post.findMany({
    where: {
      userEmail: session.user.email,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Convert dates to strings for client components
  const serializedPosts = posts.map(post => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt ? post.updatedAt.toISOString() : null,
  }));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quản lý cá nhân</h1>
      
      <ProfileClient session={session} initialPosts={serializedPosts} />
    </div>
  );
};

export default ProfilePage;
