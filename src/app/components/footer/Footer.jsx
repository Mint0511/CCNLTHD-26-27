"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import styles from './footer.module.css';

// --- Dữ liệu tĩnh cục bộ ---
const FOOTER_DATA = {
  brand: {
    logoUrl: "/logo.jpg",
    name: "Nhom6Blog",
    desc: "Nhom6Blog là nền tảng chia sẻ những kiến thức hữu ích về Đời sống, Công nghệ và Thời trang. Chúng tôi luôn nỗ lực mang đến những bài viết chất lượng, giúp bạn cập nhật xu hướng và mở rộng tầm nhìn mỗi ngày."
  },
  links: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Blog', href: '/' }
  ],
  tags: [
    { label: 'Đời sống', href: '/blog?cat=life' },
    { label: 'Phong cách', href: '/blog?cat=style' },
    { label: 'Công nghệ', href: '/blog?cat=coding' },
    { label: 'Du lịch', href: '/blog?cat=travel' }
  ]
};

// --- Component Chính ---
export default function Footer() {
  const { status } = useSession();

  return (
    <footer className={styles.container}>
      <Footer.Brand data={FOOTER_DATA.brand} />
      
      <div className={styles.links}>
        {/* Nhóm menu Links */}
        <Footer.Column title="Links" items={FOOTER_DATA.links}>
          {/* Inject phần Auth động vào qua prop custom children */}
          {status === "authenticated" ? (
            <>
              <Link href="/write">Viết bài</Link>
              <button 
                className={styles.link} 
                onClick={() => signOut()} 
                style={{ background:'none', border:'none', color:'inherit', font:'inherit', padding:0, cursor:"pointer", textAlign:"left", opacity: 0.8 }}
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <Link href="/login">Đăng nhập</Link>
          )}
        </Footer.Column>

        {/* Nhóm menu Tags */}
        <Footer.Column title="Tags" items={FOOTER_DATA.tags} />
      </div>
    </footer>
  );
}

// --- Name-spaced Sub-components (Pattern nâng cao) ---

Footer.Brand = function FooterBrand({ data }) {
  return (
    <div className={styles.info}>
      <div className={styles.logo}>
        <Image priority={false} src={data.logoUrl} alt={`${data.name} Logo`} width={50} height={50} className={styles.logoImage} />
        <h2 className={styles.logoText}>{data.name}</h2>
      </div>
      <p className={styles.desc}>{data.desc}</p>
    </div>
  );
};

Footer.Column = function FooterColumn({ title, items, children }) {
  return (
    <nav className={styles.list}>
      <span className={styles.listTitle}>{title}</span>
      {items.map((item) => (
        <Link key={item.label} href={item.href}>
          {item.label}
        </Link>
      ))}
      {/* Hiển thị thêm các Custom Elements (nếu có truyền vào) */}
      {children}
    </nav>
  );
};