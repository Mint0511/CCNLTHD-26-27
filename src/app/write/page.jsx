"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";
import "react-quill-new/dist/quill.snow.css";
import Image from "next/image";
import { useState } from "react";
import styles from "./writePage.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CldUploadWidget } from 'next-cloudinary';

const ReactQuill = dynamic(async () => {
    const { default: RQ } = await import("react-quill-new");
    const Quill = (await import("react-quill-new")).Quill;
    
    // --- ĐĂNG KÝ CẤU HÌNH CHO TRÌNH SOẠN THẢO (ReactQuill) ---

    // 1. Cấu hình Cỡ chữ (Size): Cho phép nhập số px thực tế thay vì dùng tên (small/large)
    const Size = Quill.import("attributors/style/size");
    Size.whitelist = ["12px", "14px", "16px", "18px", "20px", "24px", "30px", "36px"];
    Quill.register(Size, true);

    // 2. Cấu hình Kiểu chữ (Font): Thêm các bộ font phổ biến (Arial, Times New Roman,...)
    const Font = Quill.import("attributors/style/font");
    Font.whitelist = ["arial", "georgia", "helvetica", "lucida", "tahoma", "times-new-roman", "trebuchet", "verdana"];
    Quill.register(Font, true);

    // --------------------------------------------------------

    return RQ;
}, { ssr: false });

const WritePage = () => {
    const { status } = useSession();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [media, setMedia] = useState(""); 
    const [catSlug, setCatSlug] = useState("style"); 

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "unauthenticated") {
        router.push("/");
    }

    const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ 
                title,
                desc: value,
                img: media, 
                slug: slugify(title),
                catSlug: catSlug || "style"
            }), 
        });

        if (res.status === 200) {
            alert("Đã đăng bài thành công!");
            router.push("/");
        } else {
            alert("Đã có lỗi xảy ra khi đăng bài!");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                    <option value="style">Phong cách</option>
                    <option value="fashion">Thời trang</option>
                    <option value="food">Ẩm thực</option>
                    <option value="culture">Văn hóa</option>
                    <option value="travel">Du lịch</option>
                    <option value="coding">Công nghệ</option>
                    <option value="life">Đời sống</option>
                </select>
                <button className={styles.publish} onClick={handleSubmit}>Đăng bài</button>
            </div>

            <input 
                type="text" 
                placeholder="Tiêu đề bài viết..." 
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
            />

            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        {/* 1. Nút Upload ảnh bằng Cloudinary */}
                        <CldUploadWidget 
                            uploadPreset="blog_app"
                            onSuccess={(results) => {
                                setMedia(results.info.secure_url); // Lưu link ảnh vào state media
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
            
            {media && <p style={{fontSize:"12px", color:"green"}}>Đã chọn ảnh: {media.substring(0, 50)}...</p>}
        </div>
    );
};

export default WritePage;