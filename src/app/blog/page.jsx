import React from 'react'
import styles from './blogPage.module.css'
import CardList from '../components/cardList/CardList'
import Menu from '../components/Menu/Menu'


export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const cat = params.cat;

  return {
    title: `${cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : "All"} Blog | Nhom6Blog`,
    description: `Khám phá những bài viết mới nhất về ${cat || "mọi lĩnh vực"} trên Nhom6Blog.`,
  };
}

const Blogpage = async ({searchParams}) => {
  const params = await searchParams;  
  const page = parseInt(params.page) || 1;
  const cat = params.cat;
  const search = params.search || "";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} search={search}/>
        <Menu />
      </div>
    </div>
  )
}

export default Blogpage