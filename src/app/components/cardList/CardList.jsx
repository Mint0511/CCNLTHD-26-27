import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

// Hàm fetch dữ liệu từ API: chấp nhận trang (page), danh mục (cat) và từ khóa tìm kiếm (search)
const getData = async (page, cat, search) => {
  const baseUrl = process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const res = await fetch(`${baseUrl}/api/posts?page=${page}&cat=${cat || ""}&search=${search || ""}`, {
    cache: "no-store", // Không lưu cache để dữ liệu luôn mới nhất
    });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CardList = async({page, cat, search}) => {
  
  // Gọi hàm lấy dữ liệu bài viết
  const {posts, count} = await getData(page, cat, search);

  const POST_PER_PAGE = 2;

  // Tính toán logic Phân trang (Pagination)
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tin mới nhất</h1>
      <div className={styles.posts}>

        {posts?.map((item, index)=>(
          <Card item={item} key={item._id || index}/>
      ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default CardList