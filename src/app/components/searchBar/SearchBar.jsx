
"use client"

import React, { useState } from 'react'
import styles from './searchBar.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const SearchBar = () => {
  // useState để lưu trữ từ khóa mà người dùng gõ vào ô input
  const [query, setQuery] = useState("")
  const router = useRouter()

  // Hàm xử lý khi người dùng nhấn Search hoặc Enter
  const handleSearch = (e) => {
    e.preventDefault() // Ngăn trang web load lại
    if (query.trim()) {
      // Điều hướng sang trang blog kèm theo tham số tìm kiếm (search) trên URL
      router.push(`/blog?search=${query.trim()}`)
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Tìm kiếm..." 
        className={styles.input} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.button}>
        <Image src="/search.png" alt="search" width={20} height={20} />
      </button>
    </form>
  )
}

export default SearchBar
