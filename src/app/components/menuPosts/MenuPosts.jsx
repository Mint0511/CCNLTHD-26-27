import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPosts.module.css'

const getPosts = async () => {
  const baseUrl = process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const res = await fetch(`${baseUrl}/api/posts?sort=views`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const getCategories = async () => {
  const baseUrl = process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const res = await fetch(`${baseUrl}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

const MenuPosts = async ({ withImage }) => {
  const { posts } = await getPosts();
  const categories = await getCategories();

  // Create a map for easy lookup
  const categoryMap = categories.reduce((acc, cat) => {
    acc[cat.slug] = cat.title;
    return acc;
  }, {});

  const labels = {
    "life": "Đời sống",
    "coding": "Công nghệ",
    "travel": "Du lịch",
    "culture": "Văn hóa",
    "food": "Ẩm thực",
    "fashion": "Thời trang",
    "style": "Phong cách",
  };

  return (
    <div className={styles.items}>
      {posts?.map((item) => (
        <Link href={`/posts/${item.slug}`} className={styles.item} key={item.id}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={item.img || "/p1.jpeg"}
                alt=""
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>
              {labels[item.catSlug] || categoryMap[item.catSlug] || item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>
                {item.user?.name || "User"} -{" "}
              </span>
              <span className={styles.date}>
                {item.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;