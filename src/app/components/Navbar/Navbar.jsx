import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="TikTok" width={24} height={24} />
        <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Nhom6Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Trang chủ</Link>
        <Link href="/" className={styles.link}>Liên hệ</Link>
        <Link href="/" className={styles.link}>Giới thiệu</Link>
        <AuthLinks />
      </div>

    </div>
  )
}

export default Navbar