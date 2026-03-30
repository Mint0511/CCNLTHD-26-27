"use client"

import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  
  //temoporary
  const status = "notauthenticated"
  return <>
  {status === "notauthenticated" ? (
    <Link href="/Login" className={styles.link}>Đăng nhập</Link>
  ) : (
    <>
      <Link href="/Write"className={styles.link}>Viết bài</Link>
      <span className={styles.link}>Đăng xuất</span>
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
        <Link href="/Login">Đăng nhập</Link>
        ) : (
          <>
            <Link href="/Write">Viết bài</Link>
            <span className={styles.link}>Đăng xuất</span>
          </>
      )}
    </div>
  )}
  </>;

};

export default AuthLinks