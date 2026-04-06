import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

// Đây là một component React có tên là "Featured". Nó hiển thị một phần giới thiệu với tiêu đề và một bài viết nổi bật. Bài viết này bao gồm một hình ảnh, tiêu đề bài viết, mô tả ngắn và một nút "Read More". Các lớp CSS được sử dụng để định dạng giao diện của component này.

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there!</b> A whole world of freelance talent at your fingertips
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. Reiciendis dicta ea, pariatur, placeat nemo suscipit possimus, accusantium consequatur aspernatur quasi rerum. Tempore perspiciatis obcaecati perferendis commodi distinctio ipsam!
          </p>
          <button className={styles.button}>Đọc thêm</button>
        </div>
      </div>
    </div>
  )
}

export default Featured