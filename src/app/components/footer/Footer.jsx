"use client"

import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const Footer = () => {
  const { status } = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="Nhom6Blog" width={50} height={50} className={styles.logoImage} />
          <h1 className={styles.logoText}>Nhom6Blog</h1>
        </div>
        <p className={styles.desc}>
          Nhom6Blog là nền tảng chia sẻ những kiến thức hữu ích về Đời sống, Công nghệ và Thời trang. Chúng tôi luôn nỗ lực mang đến những bài viết chất lượng, giúp bạn cập nhật xu hướng và mở rộng tầm nhìn mỗi ngày.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Trang chủ</Link>
          <Link href="/">Blog</Link>
          {status === "authenticated" ? (
            <>
              <Link href="/write">Viết bài</Link>
              <span className={styles.link} onClick={signOut} style={{cursor:"pointer"}}>Đăng xuất</span>
            </>
          ) : (
            <Link href="/login">Đăng nhập</Link>
          )}
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=life">Đời sống</Link>
          <Link href="/blog?cat=style">Phong cách</Link>
          <Link href="/blog?cat=coding">Công nghệ</Link>
          <Link href="/blog?cat=travel">Du lịch</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer