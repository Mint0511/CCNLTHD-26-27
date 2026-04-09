import styles from "./loginPage.module.css"
import { getAuthSession } from "@/app/utils/auth"
import { redirect } from "next/navigation"
import LoginForm from "@/app/components/loginForm/LoginForm"


export const metadata = {
  title: "Đăng nhập | Nhom6Blog",
  description: "Đăng nhập vào Nhom6Blog để viết bài và bình luận.",
};

const LoginPage = async () => {
  const session = await getAuthSession()

  if (session) {
    redirect("/")
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage