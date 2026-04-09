"use client"
import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        if (session?.user?.email) {
          // Fetch posts filtered by userEmail
          const res = await fetch(`/api/posts?userEmail=${session.user.email}`);
          const data = await res.json();
          if (res.ok) {
            setPosts(data.posts);
          }
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchUserPosts();
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, status, router]);

  const handleDelete = async (slug) => {
    if (typeof window !== "undefined") {
      const confirmed = window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?");
      if (confirmed) {
        const res = await fetch(`/api/posts/${slug}`, {
          method: "DELETE",
        });

        if (res.ok) {
          alert("Đã xóa bài viết thành công!");
          setPosts(posts.filter((post) => post.slug !== slug));
          router.refresh();
        } else {
          alert("Đã có lỗi xảy ra!");
        }
      }
    }
  };

  if (status === "loading" || isLoading) return <div className={styles.loading}>Đang tải...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quản lý cá nhân</h1>
      
      <div className={styles.userCard}>
        <div className={styles.avatarContainer}>
          <Image 
            src={session?.user?.image || "/p1.jpeg"} 
            alt="User Avatar" 
            fill 
            className={styles.avatar} 
          />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.name}>{session?.user?.name || "Người dùng"}</span>
          <span className={styles.email}>{session?.user?.email}</span>
        </div>
      </div>

      <h2 className={styles.subtitle}>Bài viết của tôi</h2>
      
      <div className={styles.postList}>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div className={styles.postItem} key={post.id}>
              <div className={styles.postInfo}>
                <Link href={`/posts/${post.slug}`} className={styles.postTitle}>
                  {post.title}
                </Link>
                <div className={styles.postDate}>
                  Ngày đăng: {post.createdAt.substring(0, 10)} • {post.views} lượt xem
                </div>
              </div>
              <div className={styles.actions}>
                <Link href={`/edit/${post.slug}`} className={styles.editBtn}>
                   Sửa
                </Link>
                <button 
                  className={styles.deleteBtn} 
                  onClick={() => handleDelete(post.slug)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noPosts}>Bạn chưa có bài viết nào.</div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
