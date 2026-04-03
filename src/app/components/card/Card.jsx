import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({item}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            {item?.img && <Image src={item.img} alt={item.title} fill className={styles.image}/>}
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{new Date(item?.createdAt).toLocaleDateString()} - </span>
                <span className={styles.category}>{item?.catSlug?.toUpperCase()}</span>
            </div>
            <Link href={`/${item?.slug}`}>
                <h1>{item?.title}</h1>
            </Link>
            <p className={styles.desc}>
                {item?.desc}
            </p>
            <Link href={`/${item?.slug}`} className={styles.link}>
                Đọc thêm
            </Link>
        </div>
    </div>
  )
}

export default Card