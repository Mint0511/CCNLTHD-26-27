"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import styles from './footer.module.css';

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import styles from './footer.module.css';

// ============================================================================
// 1. LOGIC LAYER (Hook quản lý logic tác biệt khỏi giao diện)
// ============================================================================
const useFooterLogic = () => {
  const { status } = useSession();
  
  return {
    isAuthenticated: status === "authenticated",
    handleSignOut: () => signOut()
  };
};

// ============================================================================
// 2. CONFIGURATION LAYER (Hàm sinh cấu trúc menu tự động dựa trên logic)
// ============================================================================
const buildMenuColumns = (isAuthenticated, handleSignOut) => [
  {
    id: "col-links",
    title: "Links",
    items: [
      { label: "Trang chủ", href: "/" },
      { label: "Blog", href: "/" },
      // Dùng Spread Operator (...) để chèn động các mảng tùy trạng thái đăng nhập
      ...(isAuthenticated
        ? [
            { label: "Viết bài", href: "/write" },
            { label: "Đăng xuất", asButton: true, onClick: handleSignOut }
          ]
        : [
            { label: "Đăng nhập", href: "/login" }
          ]),
    ]
  },
  {
    id: "col-tags",
    title: "Tags",
    items: [
      { label: "Đời sống", href: "/blog?cat=life" },
      { label: "Phong cách", href: "/blog?cat=style" },
      { label: "Công nghệ", href: "/blog?cat=coding" },
      { label: "Du lịch", href: "/blog?cat=travel" }
    ]
  }
];

// ============================================================================
// 3. PRESENTATIONAL LAYER (Các component tĩnh chỉ chịu trách nhiệm render)
// ============================================================================
const FooterBrand = () => (
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

// --- Component Chính ---
export default function Footer() {
  const { isAuthenticated, handleSignOut } = useFooterLogic();
  const menuColumns = buildMenuColumns(isAuthenticated, handleSignOut);

  return (
    <footer className={styles.container}>
      <FooterBrand />
      
      <div className={styles.links}>
        {/* Render bảng menu động bằng cách lặp qua cấu hình config */}
        {menuColumns.map((col) => (
          <nav key={col.id} className={styles.list}>
            <span className={styles.listTitle}>{col.title}</span>
            {col.items.map((item, index) => {
              // Nếu item được cấu hình là một Action Button (như Đăng xuất)
              if (item.asButton) {
                return (
                  <button 
                    key={index} 
                    className={styles.link} 
                    onClick={item.onClick}
                    style={{ background:'none', border:'none', color:'inherit', font:'inherit', padding:0, cursor:"pointer", textAlign:"left", opacity: 0.8 }}
                  >
                    {item.label}
                  </button>
                );
              }
              // Mặc định render dạng Link Next.js
              return (
                <Link key={index} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ))}
      </div>
    </footer>
  );
}