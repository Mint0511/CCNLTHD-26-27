"use client"

import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const fetcher = async(url) =>{
    const res = await fetch(url)

    const data = await res.json()

    if(!res.ok){
        const error = new Error(data.message);
        throw error;
    }
    return data;
} 

const Comments = ({ postSlug }) => {
  
    const { data: session, status } = useSession()

    const {data, mutate, isLoading} = useSWR(
        postSlug ? `/api/comments?postSlug=${postSlug}` : null,
        fetcher
    )

    const [desc, setDesc] = useState("")

    const handlerSubmit = async () => {
        if (!desc.trim()) return;
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({desc, postSlug}),
        }) 
        setDesc("")
        mutate()
    }

    const handleDelete = async (id) => {
        if (!confirm("Bạn có chắc chắn muốn xóa bình luận này không?")) return;
        const res = await fetch(`/api/comments/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            mutate();
        } else {
            alert("Có lỗi xảy ra khi xóa bình luận!");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handlerSubmit();
        }
    }

    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Bình luận</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea 
                    placeholder="Viết bình luận..." 
                    className={styles.input} 
                    onChange={e=>setDesc(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={desc}
                />
                <button className={styles.button} onClick={handlerSubmit}>Gửi</button>
            </div>
        ) : ( 
            <Link href="/login">Đăng nhập để bình luận</Link> 
        )}
        <div className={styles.comments}>
            {isLoading ? "loading" : data?.map(item =>(
            <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                    {item?.user?.image && <Image 
                        src= {item.user.image} 
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                    />}
                    <div className={styles.userInfo}>
                        <span className={styles.username}>{item.user.name}</span>
                        <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
                    </div>
                </div>
                <p className={styles.text}>{item.desc}</p>
                {session?.user?.email === item.userEmail && (
                    <button 
                        className={styles.delete} 
                        onClick={() => handleDelete(item.id)}
                    >
                        Xóa
                    </button>
                )}
            </div>
            ))}
        </div>
        
    </div>
  )
}

export default Comments