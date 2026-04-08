"use client"

import styles from "@/app/login/loginPage.module.css"
import { signIn } from "next-auth/react"

const LoginForm = () => {
    return (
        <div className={styles.socialButton} onClick={() => signIn("github")}>
            Đăng nhập với Github
        </div>
    )
}

export default LoginForm
