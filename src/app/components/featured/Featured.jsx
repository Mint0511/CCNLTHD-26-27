import React from 'react';
import Image from 'next/image';
import styles from './featured.module.css';

/**
 * Featured Component
 * Hiển thị phần giới thiệu chung với một bài viết nổi bật.
 */
const Featured = () => (
  <section className={styles.container}>
    <header>
      <h1 className={styles.title}>
        <b>Chào mừng bạn đến với Nhom6Blog!</b> Nơi chia sẻ những câu chuyện và kiến thức thú vị.
      </h1>
    </header>
    
    <article className={styles.post}>
      <figure className={styles.imgContainer}>
        <Image 
          src="/p1.jpeg" 
          alt="Bài viết nổi bật" 
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
  </section>
);

export default Featured;