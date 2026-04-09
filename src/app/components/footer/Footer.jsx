"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import styles from './footer.module.css';

// --- Cấu hình Dữ liệu (Data-driven) ---
const TAGS_DATA = [
  { label: 'Đời sống', href: '/blog?cat=life' },
  { label: 'Phong cách', href: '/blog?cat=style' },
  { label: 'Công nghệ', href: '/blog?cat=coding' },
  { label: 'Du lịch', href: '/blog?cat=travel' },
];

const MAIN_LINKS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Blog', href: '/' },
];

// --- Sub-components ---
const FooterInfo = () => (
  <div className={styles.info}>
    <div className={styles.logo}>
      <Image priority={false} src="/logo.jpg" alt="Nhom6Blog Logo" width={50} height={50} className={styles.logoImage} />
      <h2 className={styles.logoText}>Nhom6Blog</h2>
    </div>
    <p className={styles.desc}>
      Nhom6Blog là nền tảng chia sẻ những kiến thức hữu ích về Đời sống, Công nghệ và Thời trang. Chúng tôi luôn nỗ lực mang đến những bài viết chất lượng, giúp bạn cập nhật xu hướng và mở rộng tầm nhìn mỗi ngày.
    </p>
  </div>
);

const FooterNavigation = ({ status }) => (
  <div className={styles.links}>
    <nav className={styles.list}>
      <span className={styles.listTitle}>Links</span>
      {MAIN_LINKS.map((link) => (
        <Link key={link.label} href={link.href}>{link.label}</Link>
      ))}
      
      {/* Logic hiển thị Links theo trạng thái Đăng nhập */}
      {status === "authenticated" ? (
        <>
          <Link href="/write">Viết bài</Link>
          <span className={styles.link} onClick={signOut} style={{cursor:"pointer", opacity: 0.8}}>Đăng xuất</span>
        </>
      ) : (
        <Link href="/login">Đăng nhập</Link>
      )}
    </nav>
    
    <nav className={styles.list}>
      <span className={styles.listTitle}>Tags</span>
      {TAGS_DATA.map((tag) => (
        <Link key={tag.label} href={tag.href}>{tag.label}</Link>
      ))}
    </nav>
  </div>
);

// --- Component Chính (Footer) ---
export default function Footer() {
  const { status } = useSession();

  return (
    <footer className={styles.container}>
      <FooterInfo />
      <FooterNavigation status={status} />
    </footer>
  );
}