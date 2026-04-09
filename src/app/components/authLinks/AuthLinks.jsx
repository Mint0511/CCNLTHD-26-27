"use client"

import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  
  const { status, data } = useSession();
  return <>
  {status === "unauthenticated" ? (
    <Link href="/login" className={styles.link}>Đăng nhập</Link>
  ) : (
    <>
      <Link href="/write"className={styles.link}>Viết bài</Link>
      <span className={styles.link} onClick={signOut}>Đăng xuất</span>
      {data?.user?.image && (
        <Link href="/profile">
          <Image src={data.user.image} alt="" width={30} height={30} className={styles.avatar} />
        </Link>
      )}
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
      {status === "unauthenticated" ? (
        <Link href="/login" onClick={() => setOpen(false)}>Đăng nhập</Link>
        ) : (
          <>
            <Link href="/profile" onClick={() => setOpen(false)}>Hồ sơ</Link>
            <Link href="/write" onClick={() => setOpen(false)}>Viết bài</Link>
            <span onClick={signOut}>Đăng xuất</span>
          </>
      )}
    </div>
  )}
  </>;

};

export default AuthLinks