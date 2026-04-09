import React from 'react';
import Image from 'next/image';
import styles from './featured.module.css';

// Tách dữ liệu tĩnh ra khỏi thành phần giao diện (Data-driven approach)
const FEATURED_CONTENT = {
  greeting: "Chào mừng bạn đến với Nhom6Blog!",
  subtitle: "Nơi chia sẻ những câu chuyện và kiến thức thú vị.",
  post: {
    imageSrc: "/p1.jpeg",
    imageAlt: "Góc nhìn cuộc sống đa dạng",
    title: "Khám phá thế giới qua những bài viết đa dạng và ý nghĩa mỗi ngày.",
    description:
      "Tại đây, chúng tôi mang tới cho bạn những góc nhìn mới mẻ về đời sống, công nghệ, thời trang và nhiều lĩnh vực khác. Hãy cùng chúng tôi lan tỏa tri thức và niềm cảm hứng qua từng trang viết, giúp cuộc sống trở nên phong phú và thi vị hơn.",
  }
};

export default function Featured() {
  const { greeting, subtitle, post } = FEATURED_CONTENT;

  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.title}>
          <b>{greeting}</b> {subtitle}
        </h1>
      </header>
      
      <article className={styles.post}>
        <figure className={styles.imgContainer}>
          <Image 
            src={post.imageSrc} 
            alt={post.imageAlt} 
            fill 
            className={styles.image} 
            priority 
          />
        </figure>
        
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postDesc}>{post.description}</p>
        </div>
      </article>
    </section>
  );
}