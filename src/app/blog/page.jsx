import React from 'react'
import styles from './blogPage.module.css'
import CardList from '../components/cardList/CardList'
import Menu from '../components/Menu/Menu'

const Blogpage = async ({searchParams}) => {
  const params = await searchParams;  
  const page = parseInt(params.page) || 1;
  const cat = params.cat;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  )
}

export default Blogpage