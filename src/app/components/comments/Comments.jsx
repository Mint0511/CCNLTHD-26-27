import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Comments() {
  
    const status = "authenticated"
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Bình luận</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Viết bình luận..." className={styles.input}/>
                <button className={styles.button}>Gửi</button>
            </div>
        ) : ( 
            <Link href="/login">Đăng nhập để bình luận</Link> 
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                        src="/p1.jpeg" 
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Thanh Thao</span>
                        <span className={styles.date}>01.01.2026</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Thật tuyệt vời
                </p>
            </div>
        </div>
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                        src="/p1.jpeg" 
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Thanh Thao</span>
                        <span className={styles.date}>01.01.2026</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Thật tuyệt vời
                </p>
            </div>
        </div>
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                        src="/p1.jpeg" 
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Thanh Thao</span>
                        <span className={styles.date}>01.01.2026</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Thật tuyệt vời
                </p>
            </div>
        </div>
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                        src="/p1.jpeg" 
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Thanh Thao</span>
                        <span className={styles.date}>01.01.2026</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Thật tuyệt vời
                </p>
            </div>
        </div>
    </div> 
  )
}

export default Comments