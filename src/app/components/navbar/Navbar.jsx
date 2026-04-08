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
        <Image src="/isf.png" alt="ISF" width={40} height={40} />
        <Image src="/SGU.png" alt="SGU" width={40} height={40} />
      </div>
      <div className={styles.logo}>Nhom6Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Trang chủ</Link>
        <AuthLinks />
      </div>

    </div>
  )
}

export default Navbar