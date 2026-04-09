import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ item }) => {
    const labels = {
        "life": "Đời sống",
        "coding": "Công nghệ",
        "travel": "Du lịch",
        "culture": "Văn hóa",
        "food": "Ẩm thực",
        "fashion": "Thời trang",
        "style": "Phong cách",
    };

    return (
        <div className={styles.container}>
            {item.img && (
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt={item.title} fill className={styles.image} />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt.substring(0, 10)} - {"  "} </span>
                    <span className={styles.category}>{labels[item.catSlug] || item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>
                    {item?.desc.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').substring(0, 160)}...
                </p>
                <Link href={`/posts/${item.slug}`} className={styles.link}>
                    Đọc thêm
                </Link>
            </div>
        </div>
    )
}

export default Card