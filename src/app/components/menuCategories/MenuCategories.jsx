import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'

function MenuCategories() {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>Phong cách</Link>
        <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>Thời trang</Link>
        <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>Ẩm thực</Link>
        <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>Du lịch</Link>
        <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>Văn hóa</Link>
        <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>Lập trình</Link>
      </div>
  )
}

export default MenuCategories