import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/Menu/Menu";


export default async function Home({searchParams}) {

  // Lấy các tham số từ URL (ví dụ: ?page=2&search=abc)
  const params = await searchParams;
  const page = parseInt(params?.page) || 1;
  const search = params?.search || "";

  return ( 
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} search={search}/>
        <Menu />
      </div>
    </div>
  );
}
