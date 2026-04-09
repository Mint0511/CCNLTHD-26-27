"use client"
import styles from "./postActions.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostActions = ({ slug }) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (typeof window !== "undefined") {
      const confirmed = window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?");
      if (confirmed) {
        const res = await fetch(`/api/posts/${slug}`, {
          method: "DELETE",
        });

        if (res.ok) {
          alert("Đã xóa bài viết thành công!");
          router.push("/");
          router.refresh();
        } else {
          alert("Đã có lỗi xảy ra khi xóa bài viết!");
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <Link href={`/edit/${slug}`} className={styles.edit}>Chỉnh sửa</Link>
      <button className={styles.delete} onClick={handleDelete}>Xóa bài</button>
    </div>
  );
};

export default PostActions;
