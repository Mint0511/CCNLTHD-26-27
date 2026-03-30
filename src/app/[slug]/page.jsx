import Menu from '../components/Menu/Menu'
import Comments from '../components/comments/Comments'
import styles from './singlePage.module.css'
import Image from 'next/image'


function Singlepage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Thanh Thao</span>
                        <span className={styles.date}>01.01.2026</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Eum nostrum omnis facere reprehenderit, nihil, atque assumenda 
                        magnam, ratione reiciendis neque ullam ipsum sequi? Autem possimus 
                        libero tempore magni neque dolore.
                    </p>
                    <h2>
                        Lorem ipsum dolor sit amet
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Eum nostrum omnis facere reprehenderit, nihil, atque assumenda 
                        magnam, ratione reiciendis neque ullam ipsum sequi? Autem possimus 
                        libero tempore magni neque dolore.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Eum nostrum omnis facere reprehenderit, nihil, atque assumenda 
                        magnam, ratione reiciendis neque ullam ipsum sequi? Autem possimus 
                        libero tempore magni neque dolore.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Eum nostrum omnis facere reprehenderit, nihil, atque assumenda 
                        magnam, ratione reiciendis neque ullam ipsum sequi? Autem possimus 
                        libero tempore magni neque dolore.
                    </p>
                </div>
                <div className={styles.comments}>
                    <Comments />
                </div>
            </div>
            <Menu />        
        </div>
    </div>
  )
}

export default Singlepage