import styles from "./loginPage.module.css"
import { getAuthSession } from "@/app/utils/auth"
import { redirect } from "next/navigation"
import LoginForm from "@/app/components/loginForm/LoginForm"

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