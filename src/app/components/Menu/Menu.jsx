import React from 'react'
import styles from './menu.module.css'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Có gì hot"}</h2>
      <h1 className={styles.title}>Nổi bật nhất</h1>
      <MenuPosts withImage={false}/>
      <h2 className={styles.subtitle}>Khám phá các chủ đề</h2>
      <h1 className={styles.title}>Hạng mục</h1>
      <MenuCategories/>
      <h2 className={styles.subtitle}>Được chọn bởi biên tập viên</h2>
      <h1 className={styles.title}>Lựa chọn của biên tập viên</h1>
      <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu