import Menu from '../../components/Menu/Menu'
import Comments from '../../components/comments/Comments'
import styles from './singlePage.module.css'
import Image from 'next/image'
import { getAuthSession } from '@/app/utils/auth'
import PostActions from '@/app/components/postActions/PostActions'

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getData(slug);

  if (!data) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  return {
    title: `${data.title} | Nhom6Blog`,
    description: data.desc?.substring(0, 160).replace(/<[^>]*>/g, ""), // Remove HTML tags for description
  };
}

const Singlepage = async ({params}) => {

    const {slug} = await params;
    const session = await getAuthSession();
    const data = await getData(slug);

  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {data?.title}    
                </h1>
                <div className={styles.user}>
                    {data?.user?.image &&<div className={styles.userImageContainer}>
                        <Image src={data.user.image} alt="" fill className={styles.avatar}/>
                    </div>}
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>{data?.user?.name || "Anonymous"}</span>
                        <span className={styles.date}>01.01.2026</span>
                    </div>
                </div>
                {session?.user?.email === data?.userEmail && (
                    <PostActions slug={slug} />
                )}
            </div>
            {data?.img && <div className={styles.imageContainer}>
                <Image src={data.img} alt="" fill className={styles.image}/>
            </div>}
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description} 
                dangerouslySetInnerHTML={{__html: data?.desc}}/>
                
                <div className={styles.comments}>
                    <Comments postSlug={slug}/>
                </div>
            </div>
            <Menu />        
        </div>
    </div>
  )
}

export default Singlepage