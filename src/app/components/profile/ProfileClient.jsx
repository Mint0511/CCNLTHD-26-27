"use client";
import styles from "../../profile/profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProfileClient = ({ session, initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const router = useRouter();

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

  return (
    <>
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
            <div className={styles.postItem} key={post.id || post.slug}>
              <div className={styles.postInfo}>
                <Link href={`/posts/${post.slug}`} className={styles.postTitle}>
                  {post.title}
                </Link>
                <div className={styles.postDate}>
                   {post.views} lượt xem
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
    </>
  );
};

export default ProfileClient;
