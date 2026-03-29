/*
  ThemeContext dùng để quản lý trạng thái giao diện (theme) cho toàn bộ ứng dụng, ví dụ như chuyển đổi giữa chế độ sáng (light) và tối (dark).
  - ThemeContext: tạo ra một context để lưu trữ trạng thái theme.
  - ThemeContextProvider: là component dùng để bọc các component con, giúp các component này có thể truy cập và thay đổi theme ở bất cứ đâu trong ứng dụng mà không cần truyền props qua nhiều cấp.
  => Giúp việc quản lý và thay đổi theme trở nên dễ dàng, tập trung và hiệu quả hơn.
*/

"Use client" /* "use client" là một chỉ thị trong Next.js để xác định rằng component này sẽ được render trên phía client (trình duyệt) thay vì phía server. Điều này cho phép sử dụng các tính năng của React như useState, useEffect, và context API mà không gặp lỗi khi render trên server. */

import { createContext } from "react";

export const ThemeContext = createContext() /* createContext() là một hàm trong React dùng để tạo một context */

const getFormLocalStorage = () => {
    if (typeof window === "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
    } /* Hàm getFormLocalStorage kiểm tra xem có đang chạy trên môi trường trình duyệt (window) hay không. Nếu có, nó sẽ lấy giá trị của "theme" từ localStorage. Nếu không có giá trị nào được lưu trữ, nó sẽ trả về "light" làm giá trị mặc định. */
}

export const ThemeContextProvider = ({children}) => {
    const {theme,setTheme} = useState(()=>{
        return getFormLocalStorage() /* useState() là một hook trong React dùng để quản lý trạng thái trong component. Ở đây, nó được sử dụng để tạo ra một trạng thái có tên là theme với giá trị mặc định được lấy từ hàm getFormLocalStorage(). Điều này có nghĩa là khi component được khởi tạo, nó sẽ kiểm tra localStorage để xem nếu có giá trị nào đã được lưu trữ cho "theme". Nếu có, nó sẽ sử dụng giá trị đó làm trạng thái ban đầu; nếu không, nó sẽ sử dụng "light" làm giá trị mặc định. */
    }) /* useState() là một hook trong React dùng để quản lý trạng thái trong component. Ở đây, nó được sử dụng để tạo ra một trạng thái có tên là theme với giá trị mặc định là "light". setTheme là hàm được sử dụng để cập nhật giá trị của theme. */
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}
