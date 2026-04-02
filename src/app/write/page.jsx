"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";
import Image from "next/image";
import { useState } from "react";
import styles from "./writePage.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const WritePage = () => {

    const { status } = useSession()
    const router = useRouter()
    const[open, setOpen] = useState(false);
    const[value, setValue] = useState("");
    
    if(status === "loading"){
        return <div className={styles.loading}>Loading...</div>
    }
    
    if(status === "authenticated"){
        router.push("/");
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input}/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16}></Image>
                </button>
                {open && ( 
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16}></Image>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16}></Image>
                        </button>
                        <button className={styles.addButton}>
                        <Image src="/video.png" alt="" width={16} height={16}></Image>
                        </button>
                    </div>
                )}
                <ReactQuill
                className={styles.textArea}
                theme="bubble" 
                value={value} 
                onChange={setValue} 
                placeholder="Hãy kể câu chuyện của bạn..."
                />
            </div>
            <button className={styles.publish}>Đăng bài</button>
        </div>
    )
}

export default WritePage;