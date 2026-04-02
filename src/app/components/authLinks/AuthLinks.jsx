"use client"

import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  
  //temoporary
  const { status } = useSession();
  return <>
  {status === "unauthenticated" ? (
    <Link href="/login" className={styles.link}>Đăng nhập</Link>
  ) : (
    <>
      <Link href="/write"className={styles.link}>Viết bài</Link>
      <span className={styles.link} onClick={signOut}>Đăng xuất</span>
    </>
  )}
  <div className={styles.burger} onClick={() => setOpen(!open)}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
  </div>
  {open && (
    <div className={styles.responsiveMenu}>
      <Link href="/">Trang chủ</Link>
      <Link href="/">Liên hệ</Link>
      <Link href="/">Giới thiệu</Link>
      {status === "notauthenticated" ? (
        <Link href="/login">Đăng nhập</Link>
        ) : (
          <>
            <Link href="/write">Viết bài</Link>
            <span className={styles.link}>Đăng xuất</span>
          </>
      )}
    </div>
  )}
  </>;

};

export default AuthLinks