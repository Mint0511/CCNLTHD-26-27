import React from 'react';
import Image from 'next/image';
import styles from './featured.module.css';

// --- Sub-component 1: Phần tiêu đề chào mừng ---
const FeaturedHeader = () => (
  <header>
    <h1 className={styles.title}>
      <b>Chào mừng bạn đến với Nhom6Blog!</b> Nơi chia sẻ những câu chuyện và kiến thức thú vị.
    </h1>
  </header>
);

// --- Sub-component 2: Phần nội dung bài viết nổi bật ---
const FeaturedPost = () => (
  <article className={styles.post}>
    <figure className={styles.imgContainer}>
      <Image 
        src="/p1.jpeg" 
        alt="Góc nhìn cuộc sống đa dạng" 
        fill 
        className={styles.image} 
        priority 
      />
    </figure>
    
    <div className={styles.textContainer}>
      <h2 className={styles.postTitle}>
        Khám phá thế giới qua những bài viết đa dạng và ý nghĩa mỗi ngày.
      </h2>
      <p className={styles.postDesc}>
        Tại đây, chúng tôi mang tới cho bạn những góc nhìn mới mẻ về đời sống, công nghệ, thời trang và nhiều lĩnh vực khác. Hãy cùng chúng tôi lan tỏa tri thức và niềm cảm hứng qua từng trang viết, giúp cuộc sống trở nên phong phú và thi vị hơn.
      </p>
    </div>
  </article>
);

// --- Component Chính (Main Component) ---
export default function Featured() {
  return (
    <section className={styles.container}>
      <FeaturedHeader />
      <FeaturedPost />
    </section>
  );
}