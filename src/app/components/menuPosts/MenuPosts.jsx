import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPosts.module.css'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage&& (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
                />
            </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Du lịch</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Thanh Thao - </span>
              <span className={styles.date}>10.02.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage&& (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
                />
            </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Văn hóa</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Thanh Thao - </span>
              <span className={styles.date}>10.02.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
                />
            </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Ẩm thực</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Thanh Thao - </span>
              <span className={styles.date}>10.02.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
                />
            </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Thời trang</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Thanh Thao - </span>
              <span className={styles.date}>10.02.2026</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts