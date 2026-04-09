import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

// Đây là một component React có tên là "Featured". Nó hiển thị một phần giới thiệu với tiêu đề và một bài viết nổi bật. Bài viết này bao gồm một hình ảnh, tiêu đề bài viết, mô tả ngắn và một nút "Read More". Các lớp CSS được sử dụng để định dạng giao diện của component này.

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Chào mừng bạn đến với Nhom6Blog!</b> Nơi chia sẻ những câu chuyện và kiến thức thú vị.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Khám phá thế giới qua những bài viết đa dạng và ý nghĩa mỗi ngày.</h1>
          <p className={styles.postDesc}>
            Tại đây, chúng tôi mang tới cho bạn những góc nhìn mới mẻ về đời sống, công nghệ, thời trang và nhiều lĩnh vực khác. Hãy cùng chúng tôi lan tỏa tri thức và niềm cảm hứng qua từng trang viết, giúp cuộc sống trở nên phong phú và thi vị hơn.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Featured