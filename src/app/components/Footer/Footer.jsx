import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Nhom6Blog" width={50} height={50} />
          <h1 className={styles.logoText}>Nhom6Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum quidem numquam a eius!
          Repudiandae, fuga consectetur excepturi blanditiis quasi placeat, molestias dicta soluta, 
          fugiat beatae culpa laudantium quos quisquam.
        </p>
        <div className={styles.icons}>
            <Image src="/facebook.png" alt="" width={18} height={18} />
             <Image src="/instagram.png" alt="" width={18} height={18} />
            <Image src="/tiktok.png" alt="" width={18} height={18} />
            <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Trang chủ</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Về chúng tôi</Link>
          <Link href="/">Liên hệ</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Phong cách</Link>
          <Link href="/">Thời trang</Link>
          <Link href="/">Lập trình</Link>
          <Link href="/">Du lịch</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>MXH</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer