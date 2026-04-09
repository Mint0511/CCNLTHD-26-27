"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";
import "react-quill-new/dist/quill.snow.css";
import Image from "next/image";
import { useState } from "react";
import styles from "../../write/writePage.module.css";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from 'next-cloudinary';

const ReactQuill = dynamic(async () => {
    const { default: RQ } = await import("react-quill-new");
    const Quill = (await import("react-quill-new")).Quill;
    
    // --- ĐĂNG KÝ CẤU HÌNH CHO TRÌNH SOẠN THẢO (ReactQuill) ---
    const Size = Quill.import("attributors/style/size");
    Size.whitelist = ["12px", "14px", "16px", "18px", "20px", "24px", "30px", "36px"];
    Quill.register(Size, true);

    const Font = Quill.import("attributors/style/font");
    Font.whitelist = ["arial", "georgia", "helvetica", "lucida", "tahoma", "times-new-roman", "trebuchet", "verdana"];
    Quill.register(Font, true);

    return RQ;
}, { ssr: false });

const EditPageClient = ({ post, slug }) => {
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(post.desc || "");
    const [title, setTitle] = useState(post.title || "");
    const [media, setMedia] = useState(post.img || ""); 
    const [catSlug, setCatSlug] = useState(post.catSlug || "style"); 

    const handleSubmit = async () => {
        const res = await fetch(`/api/posts/${slug}`, {
            method: "PATCH",
            body: JSON.stringify({ 
                title,
                desc: value,
                img: media, 
                catSlug: catSlug || "style"
            }), 
        });

        if (res.status === 200) {
            alert("Đã cập nhật bài viết thành công!");
            router.push(`/posts/${slug}`);
            router.refresh();
        } else {
            alert("Đã có lỗi xảy ra khi cập nhật!");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <select 
                    className={styles.select} 
                    value={catSlug}
                    onChange={(e) => setCatSlug(e.target.value)}
                >
                    <option value="style">Phong cách</option>
                    <option value="fashion">Thời trang</option>
                    <option value="food">Ẩm thực</option>
                    <option value="culture">Văn hóa</option>
                    <option value="travel">Du lịch</option>
                    <option value="coding">Công nghệ</option>
                    <option value="life">Đời sống</option>
                </select>
                <button className={styles.publish} onClick={handleSubmit}>Cập nhật</button>
            </div>

            <input 
                type="text" 
                placeholder="Tiêu đề bài viết..." 
                className={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <CldUploadWidget 
                            uploadPreset="blog_app"
                            onSuccess={(results) => {
                                setMedia(results.info.secure_url);
                                alert("Đã tải ảnh lên thành công!");
                            }}
                        >
                            {({ open }) => (
                                <button className={styles.addButton} onClick={() => open()}>
                                    <Image src="/image.png" alt="" width={16} height={16} />
                                </button>
                            )}
                        </CldUploadWidget>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    placeholder="Hãy kể câu chuyện của bạn..."
                    modules={{
                        toolbar: [
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'font': ["arial", "georgia", "helvetica", "lucida", "tahoma", "times-new-roman", "trebuchet", "verdana"] }],
                            [{ 'size': ["12px", "14px", "16px", "18px", "20px", "24px", "30px", "36px"] }],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'align': [] }],
                            ['link', 'image'],
                            ['clean']
                        ],
                    }}
                />
            </div>
            
            {media && (
                <div style={{marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px"}}>
                   <p style={{fontSize:"14px", fontWeight: "bold"}}>Ảnh minh họa hiện tại:</p>
                   <div style={{position: "relative", width: "300px", height: "180px"}}>
                        <Image src={media} alt="" fill style={{objectFit: "cover", borderRadius: "8px"}}/>
                   </div>
                </div>
            )}
        </div>
    );
};

export default EditPageClient;
