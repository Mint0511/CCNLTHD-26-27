import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Link from 'next/link'
import SearchBar from '../searchBar/SearchBar'

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Khối bên trái: Chứa Logo và Thanh tìm kiếm (SearchBar) */}
      <div className={styles.left}>
        <div className={styles.social}>
          <Image src="/isf.png" alt="ISF" width={40} height={40} />
          <Image src="/SGU.png" alt="SGU" width={40} height={40} />
        </div>
        <SearchBar />
      </div>

      {/* Khối ở giữa: Chứa tên trang web, được căn giữa tuyệt đối nhờ flex: 1 và text-align: center */}
      <div className={styles.logo}>Nhom6Blog</div>

      {/* Khối bên phải: Chứa các liên kết điều hướng và Nút bật/tắt Theme */}
      <div className={styles.right}>
        <div className={styles.links}>
          <ThemeToggle />
          <Link href="/" className={styles.link}>Trang chủ</Link>
          <AuthLinks />
        </div>
      </div>
    </div>
  )
}

export default Navbar