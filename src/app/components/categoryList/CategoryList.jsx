import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'

// CategoryList là một component React hiển thị danh sách các thể loại phổ biến.*/

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}> 
          <Image 
          src ="/style.png" 
          alt="" 
          width={32}
          height={32}
          className={styles.image} 
          />
          Phong cách
        </Link>
         <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}> 
          <Image 
          src ="/fashion.png" 
          alt="" 
          width={32}
          height={32}
          className={styles.image} 
          />
          Thời trang
        </Link>
         <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}> 
          <Image 
          src ="/food.png" 
          alt="" 
          width={32}
          height={32}
          className={styles.image} 
          />
          Ẩm thực
        </Link>
         <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
          <Image 
          src ="/travel.png" 
          alt="" 
          width={32}
          height={32}
          className={styles.image} 
          />
          Du lịch
        </Link>
         <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
          <Image 
          src ="/culture.png" 
          alt="" 
          width={32}
          height={32}
          className={styles.image} 
          />
          Văn hóa
        </Link>
         <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}> 
          <Image 
          src ="/coding.png" 
          alt="" 
          width={32}
          height={32}
          className={styles.image} 
          />
          Lập trình
        </Link>
      </div>
    </div>
  )
}

export default CategoryList