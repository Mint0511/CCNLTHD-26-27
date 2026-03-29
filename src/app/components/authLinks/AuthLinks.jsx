import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
  
  //temoporary
  const status = "notauthenticated"
  return <>
  {status === "notauthenticated" ? (
    <Link href="/Login">Login</Link>
  ) : (
    <>
    <Link href="/Write">Write</Link>
    <span className={styles.link}>Logout</span>
    </>
  )}
  </>;

};

export default AuthLinks